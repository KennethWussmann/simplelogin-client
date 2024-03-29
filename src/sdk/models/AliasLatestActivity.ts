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
import type { AliasLatestActivityContact } from './AliasLatestActivityContact';
import {
    AliasLatestActivityContactFromJSON,
    AliasLatestActivityContactFromJSONTyped,
    AliasLatestActivityContactToJSON,
} from './AliasLatestActivityContact';

/**
 * 
 * @export
 * @interface AliasLatestActivity
 */
export interface AliasLatestActivity {
    /**
     * 
     * @type {string}
     * @memberof AliasLatestActivity
     */
    action: string;
    /**
     * 
     * @type {AliasLatestActivityContact}
     * @memberof AliasLatestActivity
     */
    contact: AliasLatestActivityContact;
    /**
     * 
     * @type {number}
     * @memberof AliasLatestActivity
     */
    timestamp: number;
}

/**
 * Check if a given object implements the AliasLatestActivity interface.
 */
export function instanceOfAliasLatestActivity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "contact" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function AliasLatestActivityFromJSON(json: any): AliasLatestActivity {
    return AliasLatestActivityFromJSONTyped(json, false);
}

export function AliasLatestActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasLatestActivity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'contact': AliasLatestActivityContactFromJSON(json['contact']),
        'timestamp': json['timestamp'],
    };
}

export function AliasLatestActivityToJSON(value?: AliasLatestActivity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'contact': AliasLatestActivityContactToJSON(value.contact),
        'timestamp': value.timestamp,
    };
}

