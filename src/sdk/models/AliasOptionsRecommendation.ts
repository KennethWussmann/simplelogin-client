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
 * @interface AliasOptionsRecommendation
 */
export interface AliasOptionsRecommendation {
    /**
     * 
     * @type {string}
     * @memberof AliasOptionsRecommendation
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof AliasOptionsRecommendation
     */
    hostname: string;
}

/**
 * Check if a given object implements the AliasOptionsRecommendation interface.
 */
export function instanceOfAliasOptionsRecommendation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "alias" in value;
    isInstance = isInstance && "hostname" in value;

    return isInstance;
}

export function AliasOptionsRecommendationFromJSON(json: any): AliasOptionsRecommendation {
    return AliasOptionsRecommendationFromJSONTyped(json, false);
}

export function AliasOptionsRecommendationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasOptionsRecommendation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': json['alias'],
        'hostname': json['hostname'],
    };
}

export function AliasOptionsRecommendationToJSON(value?: AliasOptionsRecommendation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': value.alias,
        'hostname': value.hostname,
    };
}

