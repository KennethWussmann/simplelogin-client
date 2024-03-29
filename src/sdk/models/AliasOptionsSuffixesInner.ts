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
 * @interface AliasOptionsSuffixesInner
 */
export interface AliasOptionsSuffixesInner {
    /**
     * 
     * @type {string}
     * @memberof AliasOptionsSuffixesInner
     */
    suffix: string;
    /**
     * 
     * @type {string}
     * @memberof AliasOptionsSuffixesInner
     */
    signedSuffix?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AliasOptionsSuffixesInner
     */
    isCustom: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AliasOptionsSuffixesInner
     */
    isPremium: boolean;
}

/**
 * Check if a given object implements the AliasOptionsSuffixesInner interface.
 */
export function instanceOfAliasOptionsSuffixesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "suffix" in value;
    isInstance = isInstance && "isCustom" in value;
    isInstance = isInstance && "isPremium" in value;

    return isInstance;
}

export function AliasOptionsSuffixesInnerFromJSON(json: any): AliasOptionsSuffixesInner {
    return AliasOptionsSuffixesInnerFromJSONTyped(json, false);
}

export function AliasOptionsSuffixesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasOptionsSuffixesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'suffix': json['suffix'],
        'signedSuffix': !exists(json, 'signed_suffix') ? undefined : json['signed_suffix'],
        'isCustom': json['is_custom'],
        'isPremium': json['is_premium'],
    };
}

export function AliasOptionsSuffixesInnerToJSON(value?: AliasOptionsSuffixesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'suffix': value.suffix,
        'signed_suffix': value.signedSuffix,
        'is_custom': value.isCustom,
        'is_premium': value.isPremium,
    };
}

