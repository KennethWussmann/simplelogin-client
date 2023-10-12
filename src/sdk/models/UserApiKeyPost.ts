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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserApiKeyPost
 */
export interface UserApiKeyPost {
    /**
     * Device name
     * @type {string}
     * @memberof UserApiKeyPost
     */
    device: string;
}

/**
 * Check if a given object implements the UserApiKeyPost interface.
 */
export function instanceOfUserApiKeyPost(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "device" in value;

    return isInstance;
}

export function UserApiKeyPostFromJSON(json: any): UserApiKeyPost {
    return UserApiKeyPostFromJSONTyped(json, false);
}

export function UserApiKeyPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserApiKeyPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': json['device'],
    };
}

export function UserApiKeyPostToJSON(value?: UserApiKeyPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': value.device,
    };
}

