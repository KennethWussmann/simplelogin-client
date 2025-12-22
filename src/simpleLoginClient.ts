import {
  AccountApi,
  AliasApi,
  type Configuration,
  CustomDomainApi,
  ExportApi,
  MailboxApi,
  SettingsApi,
} from './sdk';

export class SimpleLoginClient {
  public account: AccountApi;
  public alias: AliasApi;
  public customDomain: CustomDomainApi;
  public export: ExportApi;
  public mailbox: MailboxApi;
  public settings: SettingsApi;

  constructor(config: Configuration) {
    this.account = new AccountApi(config);
    this.alias = new AliasApi(config);
    this.customDomain = new CustomDomainApi(config);
    this.export = new ExportApi(config);
    this.mailbox = new MailboxApi(config);
    this.settings = new SettingsApi(config);
  }
}
