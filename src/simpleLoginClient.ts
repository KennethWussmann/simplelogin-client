import type { SimpleLoginConfig } from './config';
import { AccountApi, AliasApi, CustomDomainApi, MailboxApi, SettingsApi } from './sdk';

export class SimpleLoginClient {
  public account: AccountApi;
  public alias: AliasApi;
  public customDomain: CustomDomainApi;
  public mailbox: MailboxApi;
  public settings: SettingsApi;

  constructor(config: SimpleLoginConfig) {
    this.account = new AccountApi(config);
    this.alias = new AliasApi(config);
    this.customDomain = new CustomDomainApi(config);
    this.mailbox = new MailboxApi(config);
    this.settings = new SettingsApi(config);
  }
}
