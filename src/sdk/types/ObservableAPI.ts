/* eslint-disable */
// @ts-nocheck
import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Activate a new account with the activation code that was sent to the user's email.
     * Activate account
     * @param authActivatePost 
     */
    public activateAccount(authActivatePost: AuthActivatePost, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.activateAccount(authActivatePost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activateAccount(rsp)));
            }));
    }

    /**
     * Create a new API key
     * Create API key
     * @param userApiKeyPost 
     */
    public createApiKey(userApiKeyPost: UserApiKeyPost, _options?: Configuration): Observable<UserApiKey> {
        const requestContextPromise = this.requestFactory.createApiKey(userApiKeyPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApiKey(rsp)));
            }));
    }

    /**
     * Delete user (requires sudo mode)
     * Delete user
     */
    public deleteUser(_options?: Configuration): Observable<Success> {
        const requestContextPromise = this.requestFactory.deleteUser(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUser(rsp)));
            }));
    }

    /**
     * Enable sudo mode
     * Enable sudo mode
     * @param sudoPatch 
     */
    public enableSudoMode(sudoPatch: SudoPatch, _options?: Configuration): Observable<Success> {
        const requestContextPromise = this.requestFactory.enableSudoMode(sudoPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableSudoMode(rsp)));
            }));
    }

    /**
     * Request a link to reset the password for a registered account.
     * Forgot password
     * @param authForgotPasswordPost 
     */
    public forgotPassword(authForgotPasswordPost: AuthForgotPasswordPost, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.forgotPassword(authForgotPasswordPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.forgotPassword(rsp)));
            }));
    }

    /**
     * Get a one time use cookie to exchange it for a valid cookie in the web app
     * Get cookie token
     */
    public getCookieToken(_options?: Configuration): Observable<UserCookieToken> {
        const requestContextPromise = this.requestFactory.getCookieToken(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCookieToken(rsp)));
            }));
    }

    /**
     * Get user info
     * Get user info
     */
    public getUserInfo(_options?: Configuration): Observable<UserInfo> {
        const requestContextPromise = this.requestFactory.getUserInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserInfo(rsp)));
            }));
    }

    /**
     * Login using email and password to get an access token.
     * Login
     * @param authLoginPost 
     */
    public login(authLoginPost: AuthLoginPost, _options?: Configuration): Observable<AuthLogin> {
        const requestContextPromise = this.requestFactory.login(authLoginPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

    /**
     * Log out user
     * Logout
     */
    public logout(_options?: Configuration): Observable<UserInfo> {
        const requestContextPromise = this.requestFactory.logout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logout(rsp)));
            }));
    }

    /**
     * Authenticate using MFA
     * MFA authentication
     * @param authMfaPost The api_key is used in all subsequent requests. It&#39;s empty if MFA is enabled. If user hasn&#39;t enabled MFA, mfa_key is empty.
     */
    public mfa(authMfaPost: AuthMfaPost, _options?: Configuration): Observable<AuthMfa> {
        const requestContextPromise = this.requestFactory.mfa(authMfaPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mfa(rsp)));
            }));
    }

    /**
     * Request a new activation code for an account that was already registered, but not activated yet.
     * Reactivate account
     * @param authReactivatePost 
     */
    public reactivateAccount(authReactivatePost: AuthReactivatePost, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.reactivateAccount(authReactivatePost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reactivateAccount(rsp)));
            }));
    }

    /**
     * Register a new account
     * Register account
     * @param authRegisterPost 
     */
    public registerAccount(authRegisterPost: AuthRegisterPost, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.registerAccount(authRegisterPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerAccount(rsp)));
            }));
    }

    /**
     * Update user info
     * Update user info
     * @param userInfoPatch 
     */
    public updateUserInfo(userInfoPatch: UserInfoPatch, _options?: Configuration): Observable<UserInfo> {
        const requestContextPromise = this.requestFactory.updateUserInfo(userInfoPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserInfo(rsp)));
            }));
    }

}

import { AliasApiRequestFactory, AliasApiResponseProcessor} from "../apis/AliasApi";
export class ObservableAliasApi {
    private requestFactory: AliasApiRequestFactory;
    private responseProcessor: AliasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasApiRequestFactory,
        responseProcessor?: AliasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AliasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AliasApiResponseProcessor();
    }

    /**
     * Create a new contact for an alias by id.
     * Create contact
     * @param aliasId ID of an alias
     * @param aliasAliasIdContactsPost Updated settings for the given alias.
     */
    public createContact(aliasId: number, aliasAliasIdContactsPost: AliasAliasIdContactsPost, _options?: Configuration): Observable<AliasAliasIdContacts> {
        const requestContextPromise = this.requestFactory.createContact(aliasId, aliasAliasIdContactsPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContact(rsp)));
            }));
    }

    /**
     * Create a new custom alias
     * Create custom alias
     * @param aliasCustomNewPost 
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     */
    public createCustomAlias(aliasCustomNewPost: AliasCustomNewPost, hostname?: string, _options?: Configuration): Observable<Alias> {
        const requestContextPromise = this.requestFactory.createCustomAlias(aliasCustomNewPost, hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomAlias(rsp)));
            }));
    }

    /**
     * Create a new random alias
     * Create random alias
     * @param aliasRandomNewPost 
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     * @param mode Either &#x60;uuid&#x60; or &#x60;word&#x60;. By default, use the user setting when creating new random alias.
     */
    public createRandomAlias(aliasRandomNewPost: AliasRandomNewPost, hostname?: string, mode?: 'uuid' | 'word', _options?: Configuration): Observable<Alias> {
        const requestContextPromise = this.requestFactory.createRandomAlias(aliasRandomNewPost, hostname, mode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRandomAlias(rsp)));
            }));
    }

    /**
     * Delete specific alias by id.
     * Delete alias
     * @param aliasId ID of an alias
     */
    public deleteAlias(aliasId: number, _options?: Configuration): Observable<AliasAliasIdDelete> {
        const requestContextPromise = this.requestFactory.deleteAlias(aliasId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlias(rsp)));
            }));
    }

    /**
     * Get activities for specific alias by id.
     * Get activities
     * @param aliasId ID of an alias
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     */
    public getActivities(aliasId: number, pageId: number, _options?: Configuration): Observable<AliasAliasIdActivitiesModelArray> {
        const requestContextPromise = this.requestFactory.getActivities(aliasId, pageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActivities(rsp)));
            }));
    }

    /**
     * Get specific alias by id.
     * Get alias
     * @param aliasId ID of an alias
     */
    public getAlias(aliasId: number, _options?: Configuration): Observable<Alias> {
        const requestContextPromise = this.requestFactory.getAlias(aliasId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlias(rsp)));
            }));
    }

    /**
     * User alias info and suggestion. Used by the first extension screen when user opens the extension.
     * Get alias options
     * @param hostname This information is important to know where an alias is used in order to suggest user the same alias if they want to create on alias on the same website in the future.
     */
    public getAliasOptions(hostname?: string, _options?: Configuration): Observable<AliasOptions> {
        const requestContextPromise = this.requestFactory.getAliasOptions(hostname, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasOptions(rsp)));
            }));
    }

    /**
     * Get user aliases. Please note `pinned`, `disabled`, `enabled` are exclusive, i.e. only one can be present. They can only be set to `true`.
     * Get aliases
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     * @param pinned If set, only pinned aliases are returned.
     * @param disabled If set, only disabled aliases are returned.
     * @param enabled If set, only enabled aliases are returned.
     */
    public getAliases(pageId: number, pinned?: boolean, disabled?: boolean, enabled?: boolean, _options?: Configuration): Observable<AliasModelArray> {
        const requestContextPromise = this.requestFactory.getAliases(pageId, pinned, disabled, enabled, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliases(rsp)));
            }));
    }

    /**
     * Get contacts for specific alias by id.
     * Get contacts
     * @param aliasId ID of an alias
     * @param pageId The endpoint returns maximum 20 aliases for each page.
     */
    public getContacts(aliasId: number, pageId: number, _options?: Configuration): Observable<AliasAliasIdContactsModelArray> {
        const requestContextPromise = this.requestFactory.getContacts(aliasId, pageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContacts(rsp)));
            }));
    }

    /**
     * Enable or disable specific alias by id.
     * Toggle alias
     * @param aliasId ID of an alias
     */
    public toggleAlias(aliasId: number, _options?: Configuration): Observable<AliasAliasIdTogglePost> {
        const requestContextPromise = this.requestFactory.toggleAlias(aliasId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toggleAlias(rsp)));
            }));
    }

    /**
     * Update specific alias by id.
     * Update alias
     * @param aliasId ID of an alias
     * @param aliasAliasIdPatch Updated settings for the given alias.
     */
    public updateAlias(aliasId: number, aliasAliasIdPatch: AliasAliasIdPatch, _options?: Configuration): Observable<Success> {
        const requestContextPromise = this.requestFactory.updateAlias(aliasId, aliasAliasIdPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlias(rsp)));
            }));
    }

}

import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";
export class ObservableCustomDomainApi {
    private requestFactory: CustomDomainApiRequestFactory;
    private responseProcessor: CustomDomainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomDomainApiRequestFactory,
        responseProcessor?: CustomDomainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomDomainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomDomainApiResponseProcessor();
    }

    /**
     * Get users custom domains.
     * Get custom domains
     * @param aliasId ID of an alias
     */
    public getCustomDomains(aliasId: number, _options?: Configuration): Observable<CustomDomain> {
        const requestContextPromise = this.requestFactory.getCustomDomains(aliasId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomDomains(rsp)));
            }));
    }

}

import { MailboxApiRequestFactory, MailboxApiResponseProcessor} from "../apis/MailboxApi";
export class ObservableMailboxApi {
    private requestFactory: MailboxApiRequestFactory;
    private responseProcessor: MailboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailboxApiRequestFactory,
        responseProcessor?: MailboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailboxApiResponseProcessor();
    }

    /**
     * Create a new mailbox
     * Create mailbox
     * @param mailboxPost The new mailbox address
     */
    public createMailbox(mailboxPost: MailboxPost, _options?: Configuration): Observable<Mailbox> {
        const requestContextPromise = this.requestFactory.createMailbox(mailboxPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMailbox(rsp)));
            }));
    }

    /**
     * Delete specific mailbox by id.
     * Delete mailbox
     * @param mailboxId ID of a mailbox
     */
    public deleteMailbox(mailboxId: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteMailbox(mailboxId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMailbox(rsp)));
            }));
    }

    /**
     * Get user mailboxes.
     * Get mailboxes
     */
    public getMailboxes(_options?: Configuration): Observable<MailboxModelArray> {
        const requestContextPromise = this.requestFactory.getMailboxes(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailboxes(rsp)));
            }));
    }

    /**
     * Update specific mailbox by id.
     * Update mailbox
     * @param mailboxId ID of a mailbox
     * @param mailboxMailboxIdPut Updated settings of mailbox
     */
    public updateMailbox(mailboxId: number, mailboxMailboxIdPut: MailboxMailboxIdPut, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateMailbox(mailboxId, mailboxMailboxIdPut, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMailbox(rsp)));
            }));
    }

}
