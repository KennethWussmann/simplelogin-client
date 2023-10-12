import { Configuration, FetchAPI } from "./sdk";

export type SimpleLoginProps = {
  /**
   * Most API endpoints require an API key to be passed in the header.
   * @default undefined
   */
  apiKey: string;
  /**
   * Override the default base path. This is useful for testing, or for selfhosted instances.
   * @default https://app.simplelogin.io/api
   */
  basePath?: string;
  /**
   * In case you want to use the client with older versions of NodeJS you may need to install a third-party `fetch` compliant library like `node-fetch`.
   * You then just pass the `fetch` HTTP client here.
   * @default fetch provided by platform
   */
  fetchApi?: FetchAPI;
};

export class SimpleLoginConfig extends Configuration {
  constructor(private props: SimpleLoginProps) {
    super();
  }

  get apiKey() {
    return () => this.props.apiKey;
  }

  get basePath() {
    return this.props.basePath || super.basePath;
  }

  get fetchApi() {
    return this.props.fetchApi || super.fetchApi;
  }
}
