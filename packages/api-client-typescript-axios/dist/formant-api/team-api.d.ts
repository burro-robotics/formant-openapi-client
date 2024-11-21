/**
 * Formant admin-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.193.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from '../base';
import { TeamControllerGetUsers200Response } from '../formant-models';
import { TeamControllerList200Response } from '../formant-models';
import { TeamControllerPatchRequest } from '../formant-models';
import { TeamControllerPostRequest } from '../formant-models';
/**
 * TeamApi - axios parameter creator
 * @export
 */
export declare const TeamApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a team Resource: users Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerDelete: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetOne: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get users
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetUsers: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * List teams Resource: users Authorized roles: viewer
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerList: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a team Resource: users Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {TeamControllerPatchRequest} teamControllerPatchRequest PartialTeam
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPatch: (id: string, teamControllerPatchRequest: TeamControllerPatchRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a team Resource: users Authorized roles: administrator
     * @summary Post
     * @param {TeamControllerPostRequest} teamControllerPostRequest Team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPost: (teamControllerPostRequest: TeamControllerPostRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * TeamApi - functional programming interface
 * @export
 */
export declare const TeamApiFp: (configuration?: Configuration) => {
    /**
     * Delete a team Resource: users Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerDelete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamControllerPostRequest>>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get users
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetUsers(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamControllerGetUsers200Response>>;
    /**
     * List teams Resource: users Authorized roles: viewer
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamControllerList200Response>>;
    /**
     * Update a team Resource: users Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {TeamControllerPatchRequest} teamControllerPatchRequest PartialTeam
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPatch(id: string, teamControllerPatchRequest: TeamControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamControllerPostRequest>>;
    /**
     * Create a team Resource: users Authorized roles: administrator
     * @summary Post
     * @param {TeamControllerPostRequest} teamControllerPostRequest Team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPost(teamControllerPostRequest: TeamControllerPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamControllerPostRequest>>;
};
/**
 * TeamApi - factory interface
 * @export
 */
export declare const TeamApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a team Resource: users Authorized roles: administrator
     * @summary Delete
     * @param {TeamApiTeamControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerDelete(requestParameters: TeamApiTeamControllerDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get one
     * @param {TeamApiTeamControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetOne(requestParameters: TeamApiTeamControllerGetOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamControllerPostRequest>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get users
     * @param {TeamApiTeamControllerGetUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerGetUsers(requestParameters: TeamApiTeamControllerGetUsersRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamControllerGetUsers200Response>;
    /**
     * List teams Resource: users Authorized roles: viewer
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerList(options?: RawAxiosRequestConfig): AxiosPromise<TeamControllerList200Response>;
    /**
     * Update a team Resource: users Authorized roles: administrator
     * @summary Patch
     * @param {TeamApiTeamControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPatch(requestParameters: TeamApiTeamControllerPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamControllerPostRequest>;
    /**
     * Create a team Resource: users Authorized roles: administrator
     * @summary Post
     * @param {TeamApiTeamControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamControllerPost(requestParameters: TeamApiTeamControllerPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<TeamControllerPostRequest>;
};
/**
 * Request parameters for teamControllerDelete operation in TeamApi.
 * @export
 * @interface TeamApiTeamControllerDeleteRequest
 */
export interface TeamApiTeamControllerDeleteRequest {
    /**
     *
     * @type {string}
     * @memberof TeamApiTeamControllerDelete
     */
    readonly id: string;
}
/**
 * Request parameters for teamControllerGetOne operation in TeamApi.
 * @export
 * @interface TeamApiTeamControllerGetOneRequest
 */
export interface TeamApiTeamControllerGetOneRequest {
    /**
     *
     * @type {string}
     * @memberof TeamApiTeamControllerGetOne
     */
    readonly id: string;
}
/**
 * Request parameters for teamControllerGetUsers operation in TeamApi.
 * @export
 * @interface TeamApiTeamControllerGetUsersRequest
 */
export interface TeamApiTeamControllerGetUsersRequest {
    /**
     *
     * @type {string}
     * @memberof TeamApiTeamControllerGetUsers
     */
    readonly id: string;
}
/**
 * Request parameters for teamControllerPatch operation in TeamApi.
 * @export
 * @interface TeamApiTeamControllerPatchRequest
 */
export interface TeamApiTeamControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof TeamApiTeamControllerPatch
     */
    readonly id: string;
    /**
     * PartialTeam
     * @type {TeamControllerPatchRequest}
     * @memberof TeamApiTeamControllerPatch
     */
    readonly teamControllerPatchRequest: TeamControllerPatchRequest;
}
/**
 * Request parameters for teamControllerPost operation in TeamApi.
 * @export
 * @interface TeamApiTeamControllerPostRequest
 */
export interface TeamApiTeamControllerPostRequest {
    /**
     * Team
     * @type {TeamControllerPostRequest}
     * @memberof TeamApiTeamControllerPost
     */
    readonly teamControllerPostRequest: TeamControllerPostRequest;
}
/**
 * TeamApi - object-oriented interface
 * @export
 * @class TeamApi
 * @extends {BaseAPI}
 */
export declare class TeamApi extends BaseAPI {
    /**
     * Delete a team Resource: users Authorized roles: administrator
     * @summary Delete
     * @param {TeamApiTeamControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerDelete(requestParameters: TeamApiTeamControllerDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get one
     * @param {TeamApiTeamControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerGetOne(requestParameters: TeamApiTeamControllerGetOneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TeamControllerPostRequest, any>>;
    /**
     * Resource: users Authorized roles: viewer
     * @summary Get users
     * @param {TeamApiTeamControllerGetUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerGetUsers(requestParameters: TeamApiTeamControllerGetUsersRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TeamControllerGetUsers200Response, any>>;
    /**
     * List teams Resource: users Authorized roles: viewer
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerList(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TeamControllerList200Response, any>>;
    /**
     * Update a team Resource: users Authorized roles: administrator
     * @summary Patch
     * @param {TeamApiTeamControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerPatch(requestParameters: TeamApiTeamControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TeamControllerPostRequest, any>>;
    /**
     * Create a team Resource: users Authorized roles: administrator
     * @summary Post
     * @param {TeamApiTeamControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApi
     */
    teamControllerPost(requestParameters: TeamApiTeamControllerPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TeamControllerPostRequest, any>>;
}
