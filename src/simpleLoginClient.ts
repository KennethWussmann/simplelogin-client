import {
  AccountApi,
  AliasApi,
  Configuration,
  CustomDomainApi,
  ExportApi,
  MailboxApi,
  MiscApi,
  SettingsApi,
} from './sdk';

export const SIMPLELOGIN_CLIENT_DEFAULT_URL = 'https://app.simplelogin.io';

export type SimpleLoginClientOptions = {
  /**
   * The API key is almost always required.
   * Only to register a new account it would not be required.
   * @default undefined Anonymous access without authentication. Operations that require authentication will be sent to the API and fail.
   */
  apiKey?: string;
  /**
   * The URL where SimpleLogin is hosted. Used when for self-hosted SimpleLogin.
   * @default https://app.simplelogin.io
   */
  url?: string;
} & Partial<Pick<Configuration, 'fetchApi' | 'headers'>>;

const sanitizeUrl = (input: string): string => {
  let urlString = input.trim();

  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
    urlString = `https://${urlString}`;
  }

  urlString = urlString.replace(/\/+$/, '');

  if (urlString.endsWith('/api')) {
    urlString = urlString.slice(0, -4);
  }

  return urlString;
};

export class SimpleLoginClient {
  public config: Configuration;
  public account: AccountApi;
  public alias: AliasApi;
  public customDomain: CustomDomainApi;
  public export: ExportApi;
  public mailbox: MailboxApi;
  public misc: MiscApi;
  public settings: SettingsApi;

  constructor({ apiKey, url = SIMPLELOGIN_CLIENT_DEFAULT_URL, ...rest }: SimpleLoginClientOptions) {
    const sanitizedUrl = sanitizeUrl(url);
    const basePath = `${sanitizedUrl}/api`;

    this.config = new Configuration({
      apiKey,
      basePath,
      ...rest,
    });

    this.account = new AccountApi(this.config);
    this.alias = new AliasApi(this.config);
    this.customDomain = new CustomDomainApi(this.config);
    this.export = new ExportApi(this.config);
    this.mailbox = new MailboxApi(this.config);
    this.settings = new SettingsApi(this.config);

    const miscConfig = new Configuration({
      ...this.config,
      basePath: sanitizedUrl,
    });
    this.misc = new MiscApi(miscConfig);
  }
}
