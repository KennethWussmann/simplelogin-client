/* eslint-disable */
// @ts-nocheck
/**
 * SimpleLogin (unofficial)
 * The unofficial SimpleLogin API docs as OpenAPI 3.0.0 spec. This is based on the official markdown based docs, but written in OpenAPI to allow for easier integration with other tools and generation of client SDKs. Please do not contact the SimpleLogin team for support or issues with this API documentation.
 *
 * OpenAPI spec version: 4.22.0
 * Contact: contact@ketrwu.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AliasAliasIdContacts {
    /**
    * Unique identifier for the email address.
    */
    'id': number;
    /**
    * Email address for the contact.
    */
    'contact': string;
    'creationDate': Date;
    /**
    * Unix timestamp
    */
    'creationTimestamp': number;
    'lastEmailSentDate'?: Date;
    /**
    * Unix timestamp when the last email was sent.
    */
    'lastEmailSentTimestamp'?: number;
    /**
    * Reverse alias for the email address.
    */
    'reverseAlias': string;
    /**
    * Whether the email address is blocked for forwarding.
    */
    'blockForward'?: boolean;
    /**
    * Whether the contact already existed.
    */
    'existed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string",
            "format": ""
        },
        {
            "name": "creationDate",
            "baseName": "creation_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "creationTimestamp",
            "baseName": "creation_timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "lastEmailSentDate",
            "baseName": "last_email_sent_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastEmailSentTimestamp",
            "baseName": "last_email_sent_timestamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "reverseAlias",
            "baseName": "reverse_alias",
            "type": "string",
            "format": ""
        },
        {
            "name": "blockForward",
            "baseName": "block_forward",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "existed",
            "baseName": "existed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AliasAliasIdContacts.attributeTypeMap;
    }

    public constructor() {
    }
}

