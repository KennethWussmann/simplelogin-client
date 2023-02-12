/* eslint-disable */
// @ts-nocheck
export * from '../models/Alias';
export * from '../models/AliasAliasIdActivities';
export * from '../models/AliasAliasIdActivitiesModelArray';
export * from '../models/AliasAliasIdContacts';
export * from '../models/AliasAliasIdContactsModelArray';
export * from '../models/AliasAliasIdContactsPost';
export * from '../models/AliasAliasIdDelete';
export * from '../models/AliasAliasIdPatch';
export * from '../models/AliasAliasIdTogglePost';
export * from '../models/AliasCustomNewPost';
export * from '../models/AliasLatestActivity';
export * from '../models/AliasLatestActivityContact';
export * from '../models/AliasModelArray';
export * from '../models/AliasOptions';
export * from '../models/AliasOptionsRecommendationInner';
export * from '../models/AliasOptionsSuffixesInner';
export * from '../models/AliasRandomNewPost';
export * from '../models/AuthActivatePost';
export * from '../models/AuthForgotPasswordPost';
export * from '../models/AuthLogin';
export * from '../models/AuthLoginPost';
export * from '../models/AuthMfa';
export * from '../models/AuthMfaPost';
export * from '../models/AuthReactivatePost';
export * from '../models/AuthRegisterPost';
export * from '../models/CustomDomain';
export * from '../models/Mailbox';
export * from '../models/MailboxMailboxIdPut';
export * from '../models/MailboxModelArray';
export * from '../models/MailboxModelRef';
export * from '../models/MailboxPost';
export * from '../models/ModelError';
export * from '../models/Success';
export * from '../models/SudoPatch';
export * from '../models/UserApiKey';
export * from '../models/UserApiKeyPost';
export * from '../models/UserCookieToken';
export * from '../models/UserInfo';
export * from '../models/UserInfoPatch';

import { Alias } from '../models/Alias';
import { AliasAliasIdActivities } from '../models/AliasAliasIdActivities';
import { AliasAliasIdActivitiesModelArray } from '../models/AliasAliasIdActivitiesModelArray';
import { AliasAliasIdContacts } from '../models/AliasAliasIdContacts';
import { AliasAliasIdContactsModelArray } from '../models/AliasAliasIdContactsModelArray';
import { AliasAliasIdContactsPost } from '../models/AliasAliasIdContactsPost';
import { AliasAliasIdDelete } from '../models/AliasAliasIdDelete';
import { AliasAliasIdPatch } from '../models/AliasAliasIdPatch';
import { AliasAliasIdTogglePost } from '../models/AliasAliasIdTogglePost';
import { AliasCustomNewPost } from '../models/AliasCustomNewPost';
import { AliasLatestActivity } from '../models/AliasLatestActivity';
import { AliasLatestActivityContact } from '../models/AliasLatestActivityContact';
import { AliasModelArray } from '../models/AliasModelArray';
import { AliasOptions } from '../models/AliasOptions';
import { AliasOptionsRecommendationInner } from '../models/AliasOptionsRecommendationInner';
import { AliasOptionsSuffixesInner } from '../models/AliasOptionsSuffixesInner';
import { AliasRandomNewPost } from '../models/AliasRandomNewPost';
import { AuthActivatePost } from '../models/AuthActivatePost';
import { AuthForgotPasswordPost } from '../models/AuthForgotPasswordPost';
import { AuthLogin } from '../models/AuthLogin';
import { AuthLoginPost } from '../models/AuthLoginPost';
import { AuthMfa } from '../models/AuthMfa';
import { AuthMfaPost } from '../models/AuthMfaPost';
import { AuthReactivatePost } from '../models/AuthReactivatePost';
import { AuthRegisterPost } from '../models/AuthRegisterPost';
import { CustomDomain } from '../models/CustomDomain';
import { Mailbox } from '../models/Mailbox';
import { MailboxMailboxIdPut } from '../models/MailboxMailboxIdPut';
import { MailboxModelArray } from '../models/MailboxModelArray';
import { MailboxModelRef } from '../models/MailboxModelRef';
import { MailboxPost } from '../models/MailboxPost';
import { ModelError } from '../models/ModelError';
import { Success } from '../models/Success';
import { SudoPatch } from '../models/SudoPatch';
import { UserApiKey } from '../models/UserApiKey';
import { UserApiKeyPost } from '../models/UserApiKeyPost';
import { UserCookieToken } from '../models/UserCookieToken';
import { UserInfo } from '../models/UserInfo';
import { UserInfoPatch } from '../models/UserInfoPatch';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
]);

let typeMap: {[index: string]: any} = {
    "Alias": Alias,
    "AliasAliasIdActivities": AliasAliasIdActivities,
    "AliasAliasIdActivitiesModelArray": AliasAliasIdActivitiesModelArray,
    "AliasAliasIdContacts": AliasAliasIdContacts,
    "AliasAliasIdContactsModelArray": AliasAliasIdContactsModelArray,
    "AliasAliasIdContactsPost": AliasAliasIdContactsPost,
    "AliasAliasIdDelete": AliasAliasIdDelete,
    "AliasAliasIdPatch": AliasAliasIdPatch,
    "AliasAliasIdTogglePost": AliasAliasIdTogglePost,
    "AliasCustomNewPost": AliasCustomNewPost,
    "AliasLatestActivity": AliasLatestActivity,
    "AliasLatestActivityContact": AliasLatestActivityContact,
    "AliasModelArray": AliasModelArray,
    "AliasOptions": AliasOptions,
    "AliasOptionsRecommendationInner": AliasOptionsRecommendationInner,
    "AliasOptionsSuffixesInner": AliasOptionsSuffixesInner,
    "AliasRandomNewPost": AliasRandomNewPost,
    "AuthActivatePost": AuthActivatePost,
    "AuthForgotPasswordPost": AuthForgotPasswordPost,
    "AuthLogin": AuthLogin,
    "AuthLoginPost": AuthLoginPost,
    "AuthMfa": AuthMfa,
    "AuthMfaPost": AuthMfaPost,
    "AuthReactivatePost": AuthReactivatePost,
    "AuthRegisterPost": AuthRegisterPost,
    "CustomDomain": CustomDomain,
    "Mailbox": Mailbox,
    "MailboxMailboxIdPut": MailboxMailboxIdPut,
    "MailboxModelArray": MailboxModelArray,
    "MailboxModelRef": MailboxModelRef,
    "MailboxPost": MailboxPost,
    "ModelError": ModelError,
    "Success": Success,
    "SudoPatch": SudoPatch,
    "UserApiKey": UserApiKey,
    "UserApiKeyPost": UserApiKeyPost,
    "UserCookieToken": UserCookieToken,
    "UserInfo": UserInfo,
    "UserInfoPatch": UserInfoPatch,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
