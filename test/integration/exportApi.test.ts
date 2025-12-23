import { describe, expect } from 'vitest';
import { expectSuccess } from '../utils/matchers';

describe('ExportApi', () => {
  describe('Export User Data', () => {
    api('exports complete user data structure', async ({ client }) => {
      const response = await client.export.exportUserDataRaw();
      const exportData = await expectSuccess(response);

      expect(exportData.aliases).toBeDefined();
      expect(Array.isArray(exportData.aliases)).toBe(true);
      expect(exportData.customDomains).toBeDefined();
      expect(Array.isArray(exportData.customDomains)).toBe(true);
    });

    api('aliases match AliasExport schema', async ({ client }) => {
      const createdAlias = await client.alias.createRandomAlias({
        aliasRandomNewPost: { note: 'Schema test' },
      });

      const exportData = await client.export.exportUserData();

      expect(exportData.aliases.length).toBeGreaterThan(0);

      for (const alias of exportData.aliases) {
        expect(alias.email).toBeDefined();
        expect(typeof alias.email).toBe('string');
        expect(alias.enabled).toBeDefined();
        expect(typeof alias.enabled).toBe('boolean');
      }

      const aliasEmails = exportData.aliases.map((a) => a.email);
      expect(aliasEmails).toContain(createdAlias.email);
    });
  });

  describe('Export Aliases as CSV', () => {
    api('exports valid CSV with alias data', async ({ client }) => {
      const alias1 = await client.alias.createRandomAlias({
        aliasRandomNewPost: { note: 'CSV test 1' },
      });
      const alias2 = await client.alias.createRandomAlias({
        aliasRandomNewPost: { note: 'CSV test 2' },
      });

      const response = await client.export.exportAliasesAsCsvRaw();
      const csvBlob = await expectSuccess(response);

      expect(csvBlob).toBeInstanceOf(Blob);
      expect(csvBlob.size).toBeGreaterThan(0);
      expect(csvBlob.type).toBeTruthy();

      const csvText = await csvBlob.text();
      const lines = csvText.trim().split('\n');

      expect(lines[0]).toMatchInlineSnapshot(`
        "alias,note,enabled,mailboxes
        "
      `);

      expect(csvText).toContain(alias1.email);
      expect(csvText).toContain(alias2.email);
    });
  });
});
