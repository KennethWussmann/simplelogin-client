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
  Alias,
  AliasAliasIdActivitiesModelArray,
  AliasAliasIdContacts,
  AliasAliasIdContactsModelArray,
  AliasAliasIdContactsPost,
  AliasAliasIdDelete,
  AliasAliasIdPatch,
  AliasAliasIdTogglePost,
  AliasCustomNewPost,
  AliasModelArray,
  AliasOptions,
  AliasRandomNewPost,
  Success,
} from '../models';
import {
    AliasFromJSON,
    AliasToJSON,
    AliasAliasIdActivitiesModelArrayFromJSON,
    AliasAliasIdActivitiesModelArrayToJSON,
    AliasAliasIdContactsFromJSON,
    AliasAliasIdContactsToJSON,
    AliasAliasIdContactsModelArrayFromJSON,
    AliasAliasIdContactsModelArrayToJSON,
    AliasAliasIdContactsPostFromJSON,
    AliasAliasIdContactsPostToJSON,
    AliasAliasIdDeleteFromJSON,
    AliasAliasIdDeleteToJSON,
    AliasAliasIdPatchFromJSON,
    AliasAliasIdPatchToJSON,
    AliasAliasIdTogglePostFromJSON,
    AliasAliasIdTogglePostToJSON,
    AliasCustomNewPostFromJSON,
    AliasCustomNewPostToJSON,
    AliasModelArrayFromJSON,
    AliasModelArrayToJSON,
    AliasOptionsFromJSON,
    AliasOptionsToJSON,
    AliasRandomNewPostFromJSON,
    AliasRandomNewPostToJSON,
    SuccessFromJSON,
    SuccessToJSON,
} from '../models';

export interface CreateContactRequest {
    aliasId: number;
    aliasAliasIdContactsPost: AliasAliasIdContactsPost;
}

export interface CreateCustomAliasRequest {
    aliasCustomNewPost: AliasCustomNewPost;
    hostname?: string;
}

export interface CreateRandomAliasRequest {
    aliasRandomNewPost: AliasRandomNewPost;
    hostname?: string;
    mode?: CreateRandomAliasModeEnum;
}

export interface DeleteAliasRequest {
    aliasId: number;
}

export interface GetActivitiesRequest {
    aliasId: number;
    pageId: number;
}

export interface GetAliasRequest {
    aliasId: number;
}

export interface GetAliasOptionsRequest {
    hostname?: string;
}

export interface GetAliasesRequest {
    pageId: number;
    pinned?: boolean;
    disabled?: boolean;
    enabled?: boolean;
}

export interface GetContactsRequest {
    aliasId: number;
    pageId: number;
}

export interface ToggleAliasRequest {
    aliasId: number;
}

export interface UpdateAliasRequest {
    aliasId: number;
    aliasAliasIdPatch: AliasAliasIdPatch;
}

/**
 * 
 */
export class AliasApi extends runtime.BaseAPI {

    /**
     * Create a new contact for an alias by id.
     * Create contact
     */
    async createContactRaw(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasAliasIdContacts>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling createContact.');
        }

        if (requestParameters.aliasAliasIdContactsPost === null || requestParameters.aliasAliasIdContactsPost === undefined) {
            throw new runtime.RequiredError('aliasAliasIdContactsPost','Required parameter requestParameters.aliasAliasIdContactsPost was null or undefined when calling createContact.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}/contacts`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AliasAliasIdContactsPostToJSON(requestParameters.aliasAliasIdContactsPost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasAliasIdContactsFromJSON(jsonValue));
    }

    /**
     * Create a new contact for an alias by id.
     * Create contact
     */
    async createContact(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasAliasIdContacts> {
        const response = await this.createContactRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new custom alias
     * Create custom alias
     */
    async createCustomAliasRaw(requestParameters: CreateCustomAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Alias>> {
        if (requestParameters.aliasCustomNewPost === null || requestParameters.aliasCustomNewPost === undefined) {
            throw new runtime.RequiredError('aliasCustomNewPost','Required parameter requestParameters.aliasCustomNewPost was null or undefined when calling createCustomAlias.');
        }

        const queryParameters: any = {};

        if (requestParameters.hostname !== undefined) {
            queryParameters['hostname'] = requestParameters.hostname;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/v3/alias/custom/new`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AliasCustomNewPostToJSON(requestParameters.aliasCustomNewPost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasFromJSON(jsonValue));
    }

    /**
     * Create a new custom alias
     * Create custom alias
     */
    async createCustomAlias(requestParameters: CreateCustomAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Alias> {
        const response = await this.createCustomAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new random alias
     * Create random alias
     */
    async createRandomAliasRaw(requestParameters: CreateRandomAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Alias>> {
        if (requestParameters.aliasRandomNewPost === null || requestParameters.aliasRandomNewPost === undefined) {
            throw new runtime.RequiredError('aliasRandomNewPost','Required parameter requestParameters.aliasRandomNewPost was null or undefined when calling createRandomAlias.');
        }

        const queryParameters: any = {};

        if (requestParameters.hostname !== undefined) {
            queryParameters['hostname'] = requestParameters.hostname;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/alias/random/new`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AliasRandomNewPostToJSON(requestParameters.aliasRandomNewPost),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasFromJSON(jsonValue));
    }

    /**
     * Create a new random alias
     * Create random alias
     */
    async createRandomAlias(requestParameters: CreateRandomAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Alias> {
        const response = await this.createRandomAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete specific alias by id.
     * Delete alias
     */
    async deleteAliasRaw(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasAliasIdDelete>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling deleteAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasAliasIdDeleteFromJSON(jsonValue));
    }

    /**
     * Delete specific alias by id.
     * Delete alias
     */
    async deleteAlias(requestParameters: DeleteAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasAliasIdDelete> {
        const response = await this.deleteAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get activities for specific alias by id.
     * Get activities
     */
    async getActivitiesRaw(requestParameters: GetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasAliasIdActivitiesModelArray>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getActivities.');
        }

        if (requestParameters.pageId === null || requestParameters.pageId === undefined) {
            throw new runtime.RequiredError('pageId','Required parameter requestParameters.pageId was null or undefined when calling getActivities.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageId !== undefined) {
            queryParameters['page_id'] = requestParameters.pageId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}/activities`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasAliasIdActivitiesModelArrayFromJSON(jsonValue));
    }

    /**
     * Get activities for specific alias by id.
     * Get activities
     */
    async getActivities(requestParameters: GetActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasAliasIdActivitiesModelArray> {
        const response = await this.getActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get specific alias by id.
     * Get alias
     */
    async getAliasRaw(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Alias>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasFromJSON(jsonValue));
    }

    /**
     * Get specific alias by id.
     * Get alias
     */
    async getAlias(requestParameters: GetAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Alias> {
        const response = await this.getAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User alias info and suggestion. Used by the first extension screen when user opens the extension.
     * Get alias options
     */
    async getAliasOptionsRaw(requestParameters: GetAliasOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasOptions>> {
        const queryParameters: any = {};

        if (requestParameters.hostname !== undefined) {
            queryParameters['hostname'] = requestParameters.hostname;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/v5/alias/options`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasOptionsFromJSON(jsonValue));
    }

    /**
     * User alias info and suggestion. Used by the first extension screen when user opens the extension.
     * Get alias options
     */
    async getAliasOptions(requestParameters: GetAliasOptionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasOptions> {
        const response = await this.getAliasOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user aliases. Please note `pinned`, `disabled`, `enabled` are exclusive, i.e. only one can be present. They can only be set to `true`.
     * Get aliases
     */
    async getAliasesRaw(requestParameters: GetAliasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasModelArray>> {
        if (requestParameters.pageId === null || requestParameters.pageId === undefined) {
            throw new runtime.RequiredError('pageId','Required parameter requestParameters.pageId was null or undefined when calling getAliases.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageId !== undefined) {
            queryParameters['page_id'] = requestParameters.pageId;
        }

        if (requestParameters.pinned !== undefined) {
            queryParameters['pinned'] = requestParameters.pinned;
        }

        if (requestParameters.disabled !== undefined) {
            queryParameters['disabled'] = requestParameters.disabled;
        }

        if (requestParameters.enabled !== undefined) {
            queryParameters['enabled'] = requestParameters.enabled;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/v2/aliases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasModelArrayFromJSON(jsonValue));
    }

    /**
     * Get user aliases. Please note `pinned`, `disabled`, `enabled` are exclusive, i.e. only one can be present. They can only be set to `true`.
     * Get aliases
     */
    async getAliases(requestParameters: GetAliasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasModelArray> {
        const response = await this.getAliasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get contacts for specific alias by id.
     * Get contacts
     */
    async getContactsRaw(requestParameters: GetContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasAliasIdContactsModelArray>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling getContacts.');
        }

        if (requestParameters.pageId === null || requestParameters.pageId === undefined) {
            throw new runtime.RequiredError('pageId','Required parameter requestParameters.pageId was null or undefined when calling getContacts.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageId !== undefined) {
            queryParameters['page_id'] = requestParameters.pageId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}/contacts`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasAliasIdContactsModelArrayFromJSON(jsonValue));
    }

    /**
     * Get contacts for specific alias by id.
     * Get contacts
     */
    async getContacts(requestParameters: GetContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasAliasIdContactsModelArray> {
        const response = await this.getContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Enable or disable specific alias by id.
     * Toggle alias
     */
    async toggleAliasRaw(requestParameters: ToggleAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AliasAliasIdTogglePost>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling toggleAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}/toggle`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AliasAliasIdTogglePostFromJSON(jsonValue));
    }

    /**
     * Enable or disable specific alias by id.
     * Toggle alias
     */
    async toggleAlias(requestParameters: ToggleAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AliasAliasIdTogglePost> {
        const response = await this.toggleAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update specific alias by id.
     * Update alias
     */
    async updateAliasRaw(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Success>> {
        if (requestParameters.aliasId === null || requestParameters.aliasId === undefined) {
            throw new runtime.RequiredError('aliasId','Required parameter requestParameters.aliasId was null or undefined when calling updateAlias.');
        }

        if (requestParameters.aliasAliasIdPatch === null || requestParameters.aliasAliasIdPatch === undefined) {
            throw new runtime.RequiredError('aliasAliasIdPatch','Required parameter requestParameters.aliasAliasIdPatch was null or undefined when calling updateAlias.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authentication"] = this.configuration.apiKey("Authentication"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/aliases/{alias_id}`.replace(`{${"alias_id"}}`, encodeURIComponent(String(requestParameters.aliasId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AliasAliasIdPatchToJSON(requestParameters.aliasAliasIdPatch),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessFromJSON(jsonValue));
    }

    /**
     * Update specific alias by id.
     * Update alias
     */
    async updateAlias(requestParameters: UpdateAliasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Success> {
        const response = await this.updateAliasRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateRandomAliasModeEnum = {
    Uuid: 'uuid',
    Word: 'word'
} as const;
export type CreateRandomAliasModeEnum = typeof CreateRandomAliasModeEnum[keyof typeof CreateRandomAliasModeEnum];