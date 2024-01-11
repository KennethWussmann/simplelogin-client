// biome-ignore lint/format: generated file
// @ts-nocheck
type RequestCredentials = any;
type Response = any;
type RequestInit = any;
type FormData = any;
type WindowOrWorkerGlobalScope = any;
/* tslint:disable */
/* eslint-disable */
/**
 * SimpleLogin (unofficial)
 * The unofficial SimpleLogin API docs as OpenAPI 3.0.0 spec. This is based on the official markdown based docs, but written in OpenAPI to allow for easier integration with other tools and generation of client SDKs. Please do not contact the SimpleLogin team for support or issues with this API documentation.
 *
 * The version of the OpenAPI document: 4.22.0
 * Contact: contact@ketrwu.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CustomDomain,
} from '../models/index';
import {
    CustomDomainFromJSON,
    CustomDomainToJSON,
} from '../models/index';

export interface GetCustomDomainsRequest {
    aliasId: number;
}

/**
 * 
 */
export class CustomDomainApi extends runtime.BaseAPI {

    /**
     * Get users custom domains.
     * Get custom domains
     */
    async getCustomDomainsRaw(requestParameters: GetCustomDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomDomain>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getCustomDomains.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/custom_domains`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomDomainFromJSON(jsonValue));
    }

    /**
     * Get users custom domains.
     * Get custom domains
     */
    async getCustomDomains(requestParameters: GetCustomDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomDomain> {
        const response = await this.getCustomDomainsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
