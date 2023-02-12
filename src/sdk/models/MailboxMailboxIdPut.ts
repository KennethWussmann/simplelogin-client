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

export class MailboxMailboxIdPut {
    /**
    * If true, set the mailbox as the default mailbox.
    */
    '_default'?: boolean;
    /**
    * Email address
    */
    'email'?: string;
    /**
    * If true, cancel the email change of the mailbox.
    */
    'cancelEmailChange'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "cancelEmailChange",
            "baseName": "cancel_email_change",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MailboxMailboxIdPut.attributeTypeMap;
    }

    public constructor() {
    }
}

