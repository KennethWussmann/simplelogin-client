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
 * @interface AliasAliasIdContacts
 */
export interface AliasAliasIdContacts {
    /**
     * Unique identifier for the email address.
     * @type {number}
     * @memberof AliasAliasIdContacts
     */
    id: number;
    /**
     * Email address for the contact.
     * @type {string}
     * @memberof AliasAliasIdContacts
     */
    contact: string;
    /**
     * 
     * @type {Date}
     * @memberof AliasAliasIdContacts
     */
    creationDate: Date;
    /**
     * Unix timestamp
     * @type {number}
     * @memberof AliasAliasIdContacts
     */
    creationTimestamp: number;
    /**
     * 
     * @type {Date}
     * @memberof AliasAliasIdContacts
     */
    lastEmailSentDate?: Date;
    /**
     * Unix timestamp when the last email was sent.
     * @type {number}
     * @memberof AliasAliasIdContacts
     */
    lastEmailSentTimestamp?: number;
    /**
     * Reverse alias for the email address.
     * @type {string}
     * @memberof AliasAliasIdContacts
     */
    reverseAlias: string;
    /**
     * Whether the email address is blocked for forwarding.
     * @type {boolean}
     * @memberof AliasAliasIdContacts
     */
    blockForward?: boolean;
    /**
     * Whether the contact already existed.
     * @type {boolean}
     * @memberof AliasAliasIdContacts
     */
    existed?: boolean;
}

/**
 * Check if a given object implements the AliasAliasIdContacts interface.
 */
export function instanceOfAliasAliasIdContacts(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "contact" in value;
    isInstance = isInstance && "creationDate" in value;
    isInstance = isInstance && "creationTimestamp" in value;
    isInstance = isInstance && "reverseAlias" in value;

    return isInstance;
}

export function AliasAliasIdContactsFromJSON(json: any): AliasAliasIdContacts {
    return AliasAliasIdContactsFromJSONTyped(json, false);
}

export function AliasAliasIdContactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasAliasIdContacts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'contact': json['contact'],
        'creationDate': (new Date(json['creation_date'])),
        'creationTimestamp': json['creation_timestamp'],
        'lastEmailSentDate': !exists(json, 'last_email_sent_date') ? undefined : (new Date(json['last_email_sent_date'])),
        'lastEmailSentTimestamp': !exists(json, 'last_email_sent_timestamp') ? undefined : json['last_email_sent_timestamp'],
        'reverseAlias': json['reverse_alias'],
        'blockForward': !exists(json, 'block_forward') ? undefined : json['block_forward'],
        'existed': !exists(json, 'existed') ? undefined : json['existed'],
    };
}

export function AliasAliasIdContactsToJSON(value?: AliasAliasIdContacts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'contact': value.contact,
        'creation_date': (value.creationDate.toISOString()),
        'creation_timestamp': value.creationTimestamp,
        'last_email_sent_date': value.lastEmailSentDate === undefined ? undefined : (value.lastEmailSentDate.toISOString()),
        'last_email_sent_timestamp': value.lastEmailSentTimestamp,
        'reverse_alias': value.reverseAlias,
        'block_forward': value.blockForward,
        'existed': value.existed,
    };
}
