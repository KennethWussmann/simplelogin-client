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
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Activate a new account with the activation code that was sent to the user's email.
     * Activate account
     * @param authActivatePost 
     */
    public activateAccount(authActivatePost: AuthActivatePost, _options?: Configuration): Promise<void> {
        const result = this.api.activateAccount(authActivatePost, _options);
        return result.toPromise();
    }

    /**
     * Create a new API key
     * Create API key
     * @param userApiKeyPost 
     */
    public createApiKey(userApiKeyPost: UserApiKeyPost, _options?: Configuration): Promise<UserApiKey> {
        const result = this.api.createApiKey(userApiKeyPost, _options);
        return result.toPromise();
    }

    /**
     * Delete user (requires sudo mode)
     * Delete user
     */
    public deleteUser(_options?: Configuration): Promise<Success> {
        const result = this.api.deleteUser(_options);
        return result.toPromise();
    }

    /**
     * Enable sudo mode
     * Enable sudo mode
     * @param sudoPatch 
     */
    public enableSudoMode(sudoPatch: SudoPatch, _options?: Configuration): Promise<Success> {
        const result = this.api.enableSudoMode(sudoPatch, _options);
        return result.toPromise();
    }

    /**
     * Request a link to reset the password for a registered account.
     * Forgot password
     * @param authForgotPasswordPost 
     */
    public forgotPassword(authForgotPasswordPost: AuthForgotPasswordPost, _options?: Configuration): Promise<void> {
        const result = this.api.forgotPassword(authForgotPasswordPost, _options);
        return result.toPromise();
    }

    /**
     * Get a one time use cookie to exchange it for a valid cookie in the web app
     * Get cookie token
     */
    public getCookieToken(_options?: Configuration): Promise<UserCookieToken> {
        const result = this.api.getCookieToken(_options);
        return result.toPromise();
    }

    /**
     * Get user info
     * Get user info
     */
    public getUserInfo(_options?: Configuration): Promise<UserInfo> {
        const result = this.api.getUserInfo(_options);
        return result.toPromise();
    }

    /**
     * Login using email and password to get an access token.
     * Login
     * @param authLoginPost 
     */
    public login(authLoginPost: AuthLoginPost, _options?: Configuration): Promise<AuthLogin> {
        const result = this.api.login(authLoginPost, _options);
        return result.toPromise();
    }

    /**
     * Log out user
     * Logout
     */
    public logout(_options?: Configuration): Promise<UserInfo> {
        const result = this.api.logout(_options);
        return result.toPromise();
    }

    /**
     * Authenticate using MFA
     * MFA authentication
     * @param authMfaPost The api_key is used in all subsequent requests. It&#39;s empty if MFA is enabled. If user hasn&#39;t enabled MFA, mfa_key is empty.
     */
    public mfa(authMfaPost: AuthMfaPost, _options?: Configuration): Promise<AuthMfa> {
        const result = this.api.mfa(authMfaPost, _options);
        return result.toPromise();
    }

    /**
     * Request a new activation code for an account that was already registered, but not activated yet.
     * Reactivate account
     * @param authReactivatePost 
     */
    public reactivateAccount(authReactivatePost: AuthReactivatePost, _options?: Configuration): Promise<void> {
        const result = this.api.reactivateAccount(authReactivatePost, _options);
        return result.toPromise();
    }

    /**
     * Register a new account
     * Register account
     * @param authRegisterPost 
     */
    public registerAccount(authRegisterPost: AuthRegisterPost, _options?: Configuration): Promise<void> {
        const result = this.api.registerAccount(authRegisterPost, _options);
        return result.toPromise();
    }

    /**
     * Update user info
     * Update user info
     * @param userInfoPatch 
     */
    public updateUserInfo(userInfoPatch: UserInfoPatch, _options?: Configuration): Promise<UserInfo> {
        const result = this.api.updateUserInfo(userInfoPatch, _options);
        return result.toPromise();
    }


}



import { ObservableAliasApi } from './ObservableAPI';

import { AliasApiRequestFactory, AliasApiResponseProcessor} from "../apis/AliasApi";
export class PromiseAliasApi {
    private api: ObservableAliasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasApiRequestFactory,
        responseProcessor?: AliasApiResponseProcessor
    ) {
        this.api = new ObservableAliasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new contact for an alias by id.
     * Create contact
     * @param aliasId ID of an alias
     * @param aliasAliasIdContactsPost Updated settings for the given alias.
     */
    public createContact(aliasId: number, aliasAliasIdContactsPost: AliasAliasIdContactsPost, _options?: Configuration): Promise<AliasAliasIdContacts> {
        const result = this.api.createContact(aliasId, aliasAliasIdContactsPost, _options);
        return result.toPromise();
    }

    /**
     * Create a new custom alias
     * Create custom alias
     * @param aliasCustomNewPost 
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     */
    public createCustomAlias(aliasCustomNewPost: AliasCustomNewPost, hostname?: string, _options?: Configuration): Promise<Alias> {
        const result = this.api.createCustomAlias(aliasCustomNewPost, hostname, _options);
        return result.toPromise();
    }

    /**
     * Create a new random alias
     * Create random alias
     * @param aliasRandomNewPost 
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     * @param mode Either &#x60;uuid&#x60; or &#x60;word&#x60;. By default, use the user setting when creating new random alias.
     */
    public createRandomAlias(aliasRandomNewPost: AliasRandomNewPost, hostname?: string, mode?: 'uuid' | 'word', _options?: Configuration): Promise<Alias> {
        const result = this.api.createRandomAlias(aliasRandomNewPost, hostname, mode, _options);
        return result.toPromise();
    }

    /**
     * Delete specific alias by id.
     * Delete alias
     * @param aliasId ID of an alias
     */
    public deleteAlias(aliasId: number, _options?: Configuration): Promise<AliasAliasIdDelete> {
        const result = this.api.deleteAlias(aliasId, _options);
        return result.toPromise();
    }

    /**
     * Get activities for specific alias by id.
     * Get activities
     * @param aliasId ID of an alias
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     */
    public getActivities(aliasId: number, pageId: number, _options?: Configuration): Promise<AliasAliasIdActivitiesModelArray> {
        const result = this.api.getActivities(aliasId, pageId, _options);
        return result.toPromise();
    }

    /**
     * Get specific alias by id.
     * Get alias
     * @param aliasId ID of an alias
     */
    public getAlias(aliasId: number, _options?: Configuration): Promise<Alias> {
        const result = this.api.getAlias(aliasId, _options);
        return result.toPromise();
    }

    /**
     * User alias info and suggestion. Used by the first extension screen when user opens the extension.
     * Get alias options
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     */
    public getAliasOptions(hostname?: string, _options?: Configuration): Promise<AliasOptions> {
        const result = this.api.getAliasOptions(hostname, _options);
        return result.toPromise();
    }

    /**
     * Get user aliases. Please note `pinned`, `disabled`, `enabled` are exclusive, i.e. only one can be present. They can only be set to `true`.
     * Get aliases
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     * @param pinned If set, only pinned aliases are returned.
     * @param disabled If set, only disabled aliases are returned.
     * @param enabled If set, only enabled aliases are returned.
     */
    public getAliases(pageId: number, pinned?: boolean, disabled?: boolean, enabled?: boolean, _options?: Configuration): Promise<AliasModelArray> {
        const result = this.api.getAliases(pageId, pinned, disabled, enabled, _options);
        return result.toPromise();
    }

    /**
     * Get contacts for specific alias by id.
     * Get contacts
     * @param aliasId ID of an alias
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     */
    public getContacts(aliasId: number, pageId: number, _options?: Configuration): Promise<AliasAliasIdContactsModelArray> {
        const result = this.api.getContacts(aliasId, pageId, _options);
        return result.toPromise();
    }

    /**
     * Enable or disable specific alias by id.
     * Toggle alias
     * @param aliasId ID of an alias
     */
    public toggleAlias(aliasId: number, _options?: Configuration): Promise<AliasAliasIdTogglePost> {
        const result = this.api.toggleAlias(aliasId, _options);
        return result.toPromise();
    }

    /**
     * Update specific alias by id.
     * Update alias
     * @param aliasId ID of an alias
     * @param aliasAliasIdPatch Updated settings for the given alias.
     */
    public updateAlias(aliasId: number, aliasAliasIdPatch: AliasAliasIdPatch, _options?: Configuration): Promise<Success> {
        const result = this.api.updateAlias(aliasId, aliasAliasIdPatch, _options);
        return result.toPromise();
    }


}



import { ObservableCustomDomainApi } from './ObservableAPI';

import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";
export class PromiseCustomDomainApi {
    private api: ObservableCustomDomainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomDomainApiRequestFactory,
        responseProcessor?: CustomDomainApiResponseProcessor
    ) {
        this.api = new ObservableCustomDomainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get users custom domains.
     * Get custom domains
     * @param aliasId ID of an alias
     */
    public getCustomDomains(aliasId: number, _options?: Configuration): Promise<CustomDomain> {
        const result = this.api.getCustomDomains(aliasId, _options);
        return result.toPromise();
    }


}



import { ObservableMailboxApi } from './ObservableAPI';

import { MailboxApiRequestFactory, MailboxApiResponseProcessor} from "../apis/MailboxApi";
export class PromiseMailboxApi {
    private api: ObservableMailboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailboxApiRequestFactory,
        responseProcessor?: MailboxApiResponseProcessor
    ) {
        this.api = new ObservableMailboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new mailbox
     * Create mailbox
     * @param mailboxPost The new mailbox address
     */
    public createMailbox(mailboxPost: MailboxPost, _options?: Configuration): Promise<Mailbox> {
        const result = this.api.createMailbox(mailboxPost, _options);
        return result.toPromise();
    }

    /**
     * Delete specific mailbox by id.
     * Delete mailbox
     * @param mailboxId ID of a mailbox
     */
    public deleteMailbox(mailboxId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMailbox(mailboxId, _options);
        return result.toPromise();
    }

    /**
     * Get user mailboxes.
     * Get mailboxes
     */
    public getMailboxes(_options?: Configuration): Promise<MailboxModelArray> {
        const result = this.api.getMailboxes(_options);
        return result.toPromise();
    }

    /**
     * Update specific mailbox by id.
     * Update mailbox
     * @param mailboxId ID of a mailbox
     * @param mailboxMailboxIdPut Updated settings of mailbox
     */
    public updateMailbox(mailboxId: number, mailboxMailboxIdPut: MailboxMailboxIdPut, _options?: Configuration): Promise<void> {
        const result = this.api.updateMailbox(mailboxId, mailboxMailboxIdPut, _options);
        return result.toPromise();
    }


}



