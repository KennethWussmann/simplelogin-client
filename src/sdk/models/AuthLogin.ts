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
 * @interface AuthLogin
 */
export interface AuthLogin {
    /**
     * User's name, could be an empty string.
     * @type {string}
     * @memberof AuthLogin
     */
    name: string;
    /**
     * Email address
     * @type {string}
     * @memberof AuthLogin
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthLogin
     */
    mfaEnabled: boolean;
    /**
     * Only useful when user enables MFA. In this case, user needs to enter their OTP token in order to login.
     * @type {string}
     * @memberof AuthLogin
     */
    mfaKey: string;
    /**
     * If MFA is not enabled, the api key is returned right away.
     * @type {string}
     * @memberof AuthLogin
     */
    apiKey: string;
}

/**
 * Check if a given object implements the AuthLogin interface.
 */
export function instanceOfAuthLogin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "mfaEnabled" in value;
    isInstance = isInstance && "mfaKey" in value;
    isInstance = isInstance && "apiKey" in value;

    return isInstance;
}

export function AuthLoginFromJSON(json: any): AuthLogin {
    return AuthLoginFromJSONTyped(json, false);
}

export function AuthLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthLogin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
        'mfaEnabled': json['mfa_enabled'],
        'mfaKey': json['mfa_key'],
        'apiKey': json['api_key'],
    };
}

export function AuthLoginToJSON(value?: AuthLogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'email': value.email,
        'mfa_enabled': value.mfaEnabled,
        'mfa_key': value.mfaKey,
        'api_key': value.apiKey,
    };
}

