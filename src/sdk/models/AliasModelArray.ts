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
import type { Alias } from './Alias';
import {
    AliasFromJSON,
    AliasFromJSONTyped,
    AliasToJSON,
} from './Alias';

/**
 * 
 * @export
 * @interface AliasModelArray
 */
export interface AliasModelArray {
    /**
     * 
     * @type {Array<Alias>}
     * @memberof AliasModelArray
     */
    aliases?: Array<Alias>;
}

/**
 * Check if a given object implements the AliasModelArray interface.
 */
export function instanceOfAliasModelArray(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AliasModelArrayFromJSON(json: any): AliasModelArray {
    return AliasModelArrayFromJSONTyped(json, false);
}

export function AliasModelArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasModelArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aliases': !exists(json, 'aliases') ? undefined : ((json['aliases'] as Array<any>).map(AliasFromJSON)),
    };
}

export function AliasModelArrayToJSON(value?: AliasModelArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aliases': value.aliases === undefined ? undefined : ((value.aliases as Array<any>).map(AliasToJSON)),
    };
}

