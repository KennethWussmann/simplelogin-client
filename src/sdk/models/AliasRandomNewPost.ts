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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AliasRandomNewPost
 */
export interface AliasRandomNewPost {
    /**
     * Note of this alias
     * @type {string}
     * @memberof AliasRandomNewPost
     */
    note?: string;
}

/**
 * Check if a given object implements the AliasRandomNewPost interface.
 */
export function instanceOfAliasRandomNewPost(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AliasRandomNewPostFromJSON(json: any): AliasRandomNewPost {
    return AliasRandomNewPostFromJSONTyped(json, false);
}

export function AliasRandomNewPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasRandomNewPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'note': !exists(json, 'note') ? undefined : json['note'],
    };
}

export function AliasRandomNewPostToJSON(value?: AliasRandomNewPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'note': value.note,
    };
}
