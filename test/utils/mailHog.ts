type MailHogMessage = {
  Created: string;
  To: { Mailbox: string; Domain: string }[];
  Content: { Body: string };
};

type MailHogResponse = {
  items: MailHogMessage[];
};

const MAILHOG_API = 'http://localhost:8025/api/v2/messages';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const extractSimpleLoginCode = (body: string): string | null => {
  const anchored = body.match(
    /entering the following code into the application:\s*\n\s*(\d{4,10})/i
  );
  if (anchored?.[1]) return anchored[1];

  const fallback = body.match(/^\s*(\d{4,10})\s*$/m);
  return fallback?.[1] ?? null;
};

const getLatestMailBodyByTo = async (toAddress: string): Promise<string | null> => {
  const res = await fetch(MAILHOG_API);
  if (!res.ok) throw new Error(res.statusText);

  const data = (await res.json()) as MailHogResponse;

  const match = data.items
    .filter((m) => m.To.some((t) => `${t.Mailbox}@${t.Domain}` === toAddress))
    .sort((a, b) => new Date(b.Created).getTime() - new Date(a.Created).getTime())[0];

  return match?.Content.Body ?? null;
};

export const waitForSimpleLoginRegistrationCode = async (
  email: string,
  {
    timeoutMs = 30_000,
    pollIntervalMs = 1_000,
  }: {
    timeoutMs?: number;
    pollIntervalMs?: number;
  } = {}
): Promise<string> => {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const body = await getLatestMailBodyByTo(email);
    if (body) {
      const code = extractSimpleLoginCode(body);
      if (code) return code;
    }
    await sleep(pollIntervalMs);
  }

  throw new Error(`Timed out after ${timeoutMs}ms waiting for SimpleLogin code for ${email}`);
};
