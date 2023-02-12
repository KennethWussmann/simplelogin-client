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
 * @interface UserCookieToken
 */
export interface UserCookieToken {
    /**
     * 
     * @type {string}
     * @memberof UserCookieToken
     */
    token: string;
}

/**
 * Check if a given object implements the UserCookieToken interface.
 */
export function instanceOfUserCookieToken(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function UserCookieTokenFromJSON(json: any): UserCookieToken {
    return UserCookieTokenFromJSONTyped(json, false);
}

export function UserCookieTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserCookieToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function UserCookieTokenToJSON(value?: UserCookieToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}
