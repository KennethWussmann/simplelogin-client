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
import type { AliasAliasIdContacts } from './AliasAliasIdContacts';
import {
    AliasAliasIdContactsFromJSON,
    AliasAliasIdContactsFromJSONTyped,
    AliasAliasIdContactsToJSON,
} from './AliasAliasIdContacts';

/**
 * 
 * @export
 * @interface AliasAliasIdContactsModelArray
 */
export interface AliasAliasIdContactsModelArray {
    /**
     * 
     * @type {Array<AliasAliasIdContacts>}
     * @memberof AliasAliasIdContactsModelArray
     */
    contacts?: Array<AliasAliasIdContacts>;
}

/**
 * Check if a given object implements the AliasAliasIdContactsModelArray interface.
 */
export function instanceOfAliasAliasIdContactsModelArray(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AliasAliasIdContactsModelArrayFromJSON(json: any): AliasAliasIdContactsModelArray {
    return AliasAliasIdContactsModelArrayFromJSONTyped(json, false);
}

export function AliasAliasIdContactsModelArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasAliasIdContactsModelArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contacts': !exists(json, 'contacts') ? undefined : ((json['contacts'] as Array<any>).map(AliasAliasIdContactsFromJSON)),
    };
}

export function AliasAliasIdContactsModelArrayToJSON(value?: AliasAliasIdContactsModelArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contacts': value.contacts === undefined ? undefined : ((value.contacts as Array<any>).map(AliasAliasIdContactsToJSON)),
    };
}
