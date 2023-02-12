/* eslint-disable */
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
  Mailbox,
  MailboxMailboxIdPut,
  MailboxModelArray,
  MailboxPost,
} from '../models';
import {
    MailboxFromJSON,
    MailboxToJSON,
    MailboxMailboxIdPutFromJSON,
    MailboxMailboxIdPutToJSON,
    MailboxModelArrayFromJSON,
    MailboxModelArrayToJSON,
    MailboxPostFromJSON,
    MailboxPostToJSON,
} from '../models';

export interface CreateMailboxRequest {
    mailboxPost: MailboxPost;
}

export interface DeleteMailboxRequest {
    mailboxId: number;
}

export interface UpdateMailboxRequest {
    mailboxId: number;
    mailboxMailboxIdPut: MailboxMailboxIdPut;
}

/**
 * 
 */
export class MailboxApi extends runtime.BaseAPI {

    /**
     * Create a new mailbox
     * Create mailbox
     */
    async createMailboxRaw(requestParameters: CreateMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Mailbox>> {
        if (requestParameters.mailboxPost === null || requestParameters.mailboxPost === undefined) {
            throw new runtime.RequiredError('mailboxPost','Required parameter requestParameters.mailboxPost was null or undefined when calling createMailbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mailboxes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MailboxPostToJSON(requestParameters.mailboxPost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MailboxFromJSON(jsonValue));
    }

    /**
     * Create a new mailbox
     * Create mailbox
     */
    async createMailbox(requestParameters: CreateMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Mailbox> {
        const response = await this.createMailboxRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete specific mailbox by id.
     * Delete mailbox
     */
    async deleteMailboxRaw(requestParameters: DeleteMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mailboxId === null || requestParameters.mailboxId === undefined) {
            throw new runtime.RequiredError('mailboxId','Required parameter requestParameters.mailboxId was null or undefined when calling deleteMailbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mailboxes/{mailbox_id}`.replace(`{${"mailbox_id"}}`, encodeURIComponent(String(requestParameters.mailboxId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete specific mailbox by id.
     * Delete mailbox
     */
    async deleteMailbox(requestParameters: DeleteMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteMailboxRaw(requestParameters, initOverrides);
    }

    /**
     * Get user mailboxes.
     * Get mailboxes
     */
    async getMailboxesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MailboxModelArray>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/v2/mailboxes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MailboxModelArrayFromJSON(jsonValue));
    }

    /**
     * Get user mailboxes.
     * Get mailboxes
     */
    async getMailboxes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MailboxModelArray> {
        const response = await this.getMailboxesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update specific mailbox by id.
     * Update mailbox
     */
    async updateMailboxRaw(requestParameters: UpdateMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.mailboxId === null || requestParameters.mailboxId === undefined) {
            throw new runtime.RequiredError('mailboxId','Required parameter requestParameters.mailboxId was null or undefined when calling updateMailbox.');
        }

        if (requestParameters.mailboxMailboxIdPut === null || requestParameters.mailboxMailboxIdPut === undefined) {
            throw new runtime.RequiredError('mailboxMailboxIdPut','Required parameter requestParameters.mailboxMailboxIdPut was null or undefined when calling updateMailbox.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/mailboxes/{mailbox_id}`.replace(`{${"mailbox_id"}}`, encodeURIComponent(String(requestParameters.mailboxId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MailboxMailboxIdPutToJSON(requestParameters.mailboxMailboxIdPut),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update specific mailbox by id.
     * Update mailbox
     */
    async updateMailbox(requestParameters: UpdateMailboxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateMailboxRaw(requestParameters, initOverrides);
    }

}