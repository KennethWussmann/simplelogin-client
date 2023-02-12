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
 * @interface SudoPatch
 */
export interface SudoPatch {
    /**
     * 
     * @type {string}
     * @memberof SudoPatch
     */
    password?: string;
}

/**
 * Check if a given object implements the SudoPatch interface.
 */
export function instanceOfSudoPatch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SudoPatchFromJSON(json: any): SudoPatch {
    return SudoPatchFromJSONTyped(json, false);
}

export function SudoPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): SudoPatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function SudoPatchToJSON(value?: SudoPatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
    };
}
