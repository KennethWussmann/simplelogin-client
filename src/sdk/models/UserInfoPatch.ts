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
 * @interface UserInfoPatch
 */
export interface UserInfoPatch {
    /**
     * Image of the new profile picture encoded in base64. Set to null to remove current profile picture.
     * @type {string}
     * @memberof UserInfoPatch
     */
    profilePicture?: string;
    /**
     * New name of the user
     * @type {string}
     * @memberof UserInfoPatch
     */
    name?: string;
}

/**
 * Check if a given object implements the UserInfoPatch interface.
 */
export function instanceOfUserInfoPatch(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserInfoPatchFromJSON(json: any): UserInfoPatch {
    return UserInfoPatchFromJSONTyped(json, false);
}

export function UserInfoPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInfoPatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profilePicture': !exists(json, 'profile_picture') ? undefined : json['profile_picture'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UserInfoPatchToJSON(value?: UserInfoPatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile_picture': value.profilePicture,
        'name': value.name,
    };
}

