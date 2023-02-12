/* eslint-disable */
// @ts-nocheck
import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiActivateAccountRequest {
    /**
     * 
     * @type AuthActivatePost
     * @memberof AccountApiactivateAccount
     */
    authActivatePost: AuthActivatePost
}

export interface AccountApiCreateApiKeyRequest {
    /**
     * 
     * @type UserApiKeyPost
     * @memberof AccountApicreateApiKey
     */
    userApiKeyPost: UserApiKeyPost
}

export interface AccountApiDeleteUserRequest {
}

export interface AccountApiEnableSudoModeRequest {
    /**
     * 
     * @type SudoPatch
     * @memberof AccountApienableSudoMode
     */
    sudoPatch: SudoPatch
}

export interface AccountApiForgotPasswordRequest {
    /**
     * 
     * @type AuthForgotPasswordPost
     * @memberof AccountApiforgotPassword
     */
    authForgotPasswordPost: AuthForgotPasswordPost
}

export interface AccountApiGetCookieTokenRequest {
}

export interface AccountApiGetUserInfoRequest {
}

export interface AccountApiLoginRequest {
    /**
     * 
     * @type AuthLoginPost
     * @memberof AccountApilogin
     */
    authLoginPost: AuthLoginPost
}

export interface AccountApiLogoutRequest {
}

export interface AccountApiMfaRequest {
    /**
     * The api_key is used in all subsequent requests. It&#39;s empty if MFA is enabled. If user hasn&#39;t enabled MFA, mfa_key is empty.
     * @type AuthMfaPost
     * @memberof AccountApimfa
     */
    authMfaPost: AuthMfaPost
}

export interface AccountApiReactivateAccountRequest {
    /**
     * 
     * @type AuthReactivatePost
     * @memberof AccountApireactivateAccount
     */
    authReactivatePost: AuthReactivatePost
}

export interface AccountApiRegisterAccountRequest {
    /**
     * 
     * @type AuthRegisterPost
     * @memberof AccountApiregisterAccount
     */
    authRegisterPost: AuthRegisterPost
}

export interface AccountApiUpdateUserInfoRequest {
    /**
     * 
     * @type UserInfoPatch
     * @memberof AccountApiupdateUserInfo
     */
    userInfoPatch: UserInfoPatch
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate a new account with the activation code that was sent to the user's email.
     * Activate account
     * @param param the request object
     */
    public activateAccount(param: AccountApiActivateAccountRequest, options?: Configuration): Promise<void> {
        return this.api.activateAccount(param.authActivatePost,  options).toPromise();
    }

    /**
     * Create a new API key
     * Create API key
     * @param param the request object
     */
    public createApiKey(param: AccountApiCreateApiKeyRequest, options?: Configuration): Promise<UserApiKey> {
        return this.api.createApiKey(param.userApiKeyPost,  options).toPromise();
    }

    /**
     * Delete user (requires sudo mode)
     * Delete user
     * @param param the request object
     */
    public deleteUser(param: AccountApiDeleteUserRequest = {}, options?: Configuration): Promise<Success> {
        return this.api.deleteUser( options).toPromise();
    }

    /**
     * Enable sudo mode
     * Enable sudo mode
     * @param param the request object
     */
    public enableSudoMode(param: AccountApiEnableSudoModeRequest, options?: Configuration): Promise<Success> {
        return this.api.enableSudoMode(param.sudoPatch,  options).toPromise();
    }

    /**
     * Request a link to reset the password for a registered account.
     * Forgot password
     * @param param the request object
     */
    public forgotPassword(param: AccountApiForgotPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.forgotPassword(param.authForgotPasswordPost,  options).toPromise();
    }

    /**
     * Get a one time use cookie to exchange it for a valid cookie in the web app
     * Get cookie token
     * @param param the request object
     */
    public getCookieToken(param: AccountApiGetCookieTokenRequest = {}, options?: Configuration): Promise<UserCookieToken> {
        return this.api.getCookieToken( options).toPromise();
    }

    /**
     * Get user info
     * Get user info
     * @param param the request object
     */
    public getUserInfo(param: AccountApiGetUserInfoRequest = {}, options?: Configuration): Promise<UserInfo> {
        return this.api.getUserInfo( options).toPromise();
    }

    /**
     * Login using email and password to get an access token.
     * Login
     * @param param the request object
     */
    public login(param: AccountApiLoginRequest, options?: Configuration): Promise<AuthLogin> {
        return this.api.login(param.authLoginPost,  options).toPromise();
    }

    /**
     * Log out user
     * Logout
     * @param param the request object
     */
    public logout(param: AccountApiLogoutRequest = {}, options?: Configuration): Promise<UserInfo> {
        return this.api.logout( options).toPromise();
    }

    /**
     * Authenticate using MFA
     * MFA authentication
     * @param param the request object
     */
    public mfa(param: AccountApiMfaRequest, options?: Configuration): Promise<AuthMfa> {
        return this.api.mfa(param.authMfaPost,  options).toPromise();
    }

    /**
     * Request a new activation code for an account that was already registered, but not activated yet.
     * Reactivate account
     * @param param the request object
     */
    public reactivateAccount(param: AccountApiReactivateAccountRequest, options?: Configuration): Promise<void> {
        return this.api.reactivateAccount(param.authReactivatePost,  options).toPromise();
    }

    /**
     * Register a new account
     * Register account
     * @param param the request object
     */
    public registerAccount(param: AccountApiRegisterAccountRequest, options?: Configuration): Promise<void> {
        return this.api.registerAccount(param.authRegisterPost,  options).toPromise();
    }

    /**
     * Update user info
     * Update user info
     * @param param the request object
     */
    public updateUserInfo(param: AccountApiUpdateUserInfoRequest, options?: Configuration): Promise<UserInfo> {
        return this.api.updateUserInfo(param.userInfoPatch,  options).toPromise();
    }

}

import { ObservableAliasApi } from "./ObservableAPI";
import { AliasApiRequestFactory, AliasApiResponseProcessor} from "../apis/AliasApi";

export interface AliasApiCreateContactRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApicreateContact
     */
    aliasId: number
    /**
     * Updated settings for the given alias.
     * @type AliasAliasIdContactsPost
     * @memberof AliasApicreateContact
     */
    aliasAliasIdContactsPost: AliasAliasIdContactsPost
}

export interface AliasApiCreateCustomAliasRequest {
    /**
     * 
     * @type AliasCustomNewPost
     * @memberof AliasApicreateCustomAlias
     */
    aliasCustomNewPost: AliasCustomNewPost
    /**
     * This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     * @type string
     * @memberof AliasApicreateCustomAlias
     */
    hostname?: string
}

export interface AliasApiCreateRandomAliasRequest {
    /**
     * 
     * @type AliasRandomNewPost
     * @memberof AliasApicreateRandomAlias
     */
    aliasRandomNewPost: AliasRandomNewPost
    /**
     * This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     * @type string
     * @memberof AliasApicreateRandomAlias
     */
    hostname?: string
    /**
     * Either &#x60;uuid&#x60; or &#x60;word&#x60;. By default, use the user setting when creating new random alias.
     * @type &#39;uuid&#39; | &#39;word&#39;
     * @memberof AliasApicreateRandomAlias
     */
    mode?: 'uuid' | 'word'
}

export interface AliasApiDeleteAliasRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApideleteAlias
     */
    aliasId: number
}

export interface AliasApiGetActivitiesRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApigetActivities
     */
    aliasId: number
    /**
     * The endpoint returns maximum 20 aliases for each page.
     * @type number
     * @memberof AliasApigetActivities
     */
    pageId: number
}

export interface AliasApiGetAliasRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApigetAlias
     */
    aliasId: number
}

export interface AliasApiGetAliasOptionsRequest {
    /**
     * This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     * @type string
     * @memberof AliasApigetAliasOptions
     */
    hostname?: string
}

export interface AliasApiGetAliasesRequest {
    /**
     * The endpoint returns maximum 20 aliases for each page.
     * @type number
     * @memberof AliasApigetAliases
     */
    pageId: number
    /**
     * If set, only pinned aliases are returned.
     * @type boolean
     * @memberof AliasApigetAliases
     */
    pinned?: boolean
    /**
     * If set, only disabled aliases are returned.
     * @type boolean
     * @memberof AliasApigetAliases
     */
    disabled?: boolean
    /**
     * If set, only enabled aliases are returned.
     * @type boolean
     * @memberof AliasApigetAliases
     */
    enabled?: boolean
}

export interface AliasApiGetContactsRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApigetContacts
     */
    aliasId: number
    /**
     * The endpoint returns maximum 20 aliases for each page.
     * @type number
     * @memberof AliasApigetContacts
     */
    pageId: number
}

export interface AliasApiToggleAliasRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApitoggleAlias
     */
    aliasId: number
}

export interface AliasApiUpdateAliasRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof AliasApiupdateAlias
     */
    aliasId: number
    /**
     * Updated settings for the given alias.
     * @type AliasAliasIdPatch
     * @memberof AliasApiupdateAlias
     */
    aliasAliasIdPatch: AliasAliasIdPatch
}

export class ObjectAliasApi {
    private api: ObservableAliasApi

    public constructor(configuration: Configuration, requestFactory?: AliasApiRequestFactory, responseProcessor?: AliasApiResponseProcessor) {
        this.api = new ObservableAliasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new contact for an alias by id.
     * Create contact
     * @param param the request object
     */
    public createContact(param: AliasApiCreateContactRequest, options?: Configuration): Promise<AliasAliasIdContacts> {
        return this.api.createContact(param.aliasId, param.aliasAliasIdContactsPost,  options).toPromise();
    }

    /**
     * Create a new custom alias
     * Create custom alias
     * @param param the request object
     */
    public createCustomAlias(param: AliasApiCreateCustomAliasRequest, options?: Configuration): Promise<Alias> {
        return this.api.createCustomAlias(param.aliasCustomNewPost, param.hostname,  options).toPromise();
    }

    /**
     * Create a new random alias
     * Create random alias
     * @param param the request object
     */
    public createRandomAlias(param: AliasApiCreateRandomAliasRequest, options?: Configuration): Promise<Alias> {
        return this.api.createRandomAlias(param.aliasRandomNewPost, param.hostname, param.mode,  options).toPromise();
    }

    /**
     * Delete specific alias by id.
     * Delete alias
     * @param param the request object
     */
    public deleteAlias(param: AliasApiDeleteAliasRequest, options?: Configuration): Promise<AliasAliasIdDelete> {
        return this.api.deleteAlias(param.aliasId,  options).toPromise();
    }

    /**
     * Get activities for specific alias by id.
     * Get activities
     * @param param the request object
     */
    public getActivities(param: AliasApiGetActivitiesRequest, options?: Configuration): Promise<AliasAliasIdActivitiesModelArray> {
        return this.api.getActivities(param.aliasId, param.pageId,  options).toPromise();
    }

    /**
     * Get specific alias by id.
     * Get alias
     * @param param the request object
     */
    public getAlias(param: AliasApiGetAliasRequest, options?: Configuration): Promise<Alias> {
        return this.api.getAlias(param.aliasId,  options).toPromise();
    }

    /**
     * User alias info and suggestion. Used by the first extension screen when user opens the extension.
     * Get alias options
     * @param param the request object
     */
    public getAliasOptions(param: AliasApiGetAliasOptionsRequest = {}, options?: Configuration): Promise<AliasOptions> {
        return this.api.getAliasOptions(param.hostname,  options).toPromise();
    }

    /**
     * Get user aliases. Please note `pinned`, `disabled`, `enabled` are exclusive, i.e. only one can be present. They can only be set to `true`.
     * Get aliases
     * @param param the request object
     */
    public getAliases(param: AliasApiGetAliasesRequest, options?: Configuration): Promise<AliasModelArray> {
        return this.api.getAliases(param.pageId, param.pinned, param.disabled, param.enabled,  options).toPromise();
    }

    /**
     * Get contacts for specific alias by id.
     * Get contacts
     * @param param the request object
     */
    public getContacts(param: AliasApiGetContactsRequest, options?: Configuration): Promise<AliasAliasIdContactsModelArray> {
        return this.api.getContacts(param.aliasId, param.pageId,  options).toPromise();
    }

    /**
     * Enable or disable specific alias by id.
     * Toggle alias
     * @param param the request object
     */
    public toggleAlias(param: AliasApiToggleAliasRequest, options?: Configuration): Promise<AliasAliasIdTogglePost> {
        return this.api.toggleAlias(param.aliasId,  options).toPromise();
    }

    /**
     * Update specific alias by id.
     * Update alias
     * @param param the request object
     */
    public updateAlias(param: AliasApiUpdateAliasRequest, options?: Configuration): Promise<Success> {
        return this.api.updateAlias(param.aliasId, param.aliasAliasIdPatch,  options).toPromise();
    }

}

import { ObservableCustomDomainApi } from "./ObservableAPI";
import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";

export interface CustomDomainApiGetCustomDomainsRequest {
    /**
     * ID of an alias
     * @type number
     * @memberof CustomDomainApigetCustomDomains
     */
    aliasId: number
}

export class ObjectCustomDomainApi {
    private api: ObservableCustomDomainApi

    public constructor(configuration: Configuration, requestFactory?: CustomDomainApiRequestFactory, responseProcessor?: CustomDomainApiResponseProcessor) {
        this.api = new ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get users custom domains.
     * Get custom domains
     * @param param the request object
     */
    public getCustomDomains(param: CustomDomainApiGetCustomDomainsRequest, options?: Configuration): Promise<CustomDomain> {
        return this.api.getCustomDomains(param.aliasId,  options).toPromise();
    }

}

import { ObservableMailboxApi } from "./ObservableAPI";
import { MailboxApiRequestFactory, MailboxApiResponseProcessor} from "../apis/MailboxApi";

export interface MailboxApiCreateMailboxRequest {
    /**
     * The new mailbox address
     * @type MailboxPost
     * @memberof MailboxApicreateMailbox
     */
    mailboxPost: MailboxPost
}

export interface MailboxApiDeleteMailboxRequest {
    /**
     * ID of a mailbox
     * @type number
     * @memberof MailboxApideleteMailbox
     */
    mailboxId: number
}

export interface MailboxApiGetMailboxesRequest {
}

export interface MailboxApiUpdateMailboxRequest {
    /**
     * ID of a mailbox
     * @type number
     * @memberof MailboxApiupdateMailbox
     */
    mailboxId: number
    /**
     * Updated settings of mailbox
     * @type MailboxMailboxIdPut
     * @memberof MailboxApiupdateMailbox
     */
    mailboxMailboxIdPut: MailboxMailboxIdPut
}

export class ObjectMailboxApi {
    private api: ObservableMailboxApi

    public constructor(configuration: Configuration, requestFactory?: MailboxApiRequestFactory, responseProcessor?: MailboxApiResponseProcessor) {
        this.api = new ObservableMailboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new mailbox
     * Create mailbox
     * @param param the request object
     */
    public createMailbox(param: MailboxApiCreateMailboxRequest, options?: Configuration): Promise<Mailbox> {
        return this.api.createMailbox(param.mailboxPost,  options).toPromise();
    }

    /**
     * Delete specific mailbox by id.
     * Delete mailbox
     * @param param the request object
     */
    public deleteMailbox(param: MailboxApiDeleteMailboxRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMailbox(param.mailboxId,  options).toPromise();
    }

    /**
     * Get user mailboxes.
     * Get mailboxes
     * @param param the request object
     */
    public getMailboxes(param: MailboxApiGetMailboxesRequest = {}, options?: Configuration): Promise<MailboxModelArray> {
        return this.api.getMailboxes( options).toPromise();
    }

    /**
     * Update specific mailbox by id.
     * Update mailbox
     * @param param the request object
     */
    public updateMailbox(param: MailboxApiUpdateMailboxRequest, options?: Configuration): Promise<void> {
        return this.api.updateMailbox(param.mailboxId, param.mailboxMailboxIdPut,  options).toPromise();
    }

}
