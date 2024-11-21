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
import { ScheduleControllerPatchRequest } from '../formant-models';
import { ScheduleControllerPostRequest } from '../formant-models';
import { ScheduleControllerQuery200Response } from '../formant-models';
import { ScheduleControllerQueryRequest } from '../formant-models';
/**
 * ScheduleApi - axios parameter creator
 * @export
 */
export declare const ScheduleApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a command schedule. Resource: schedules Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerDelete: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a command schedule by command schedule ID. Resource: schedules Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerGetOne: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update an existing command schedule. Resource: schedules Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {ScheduleControllerPatchRequest} scheduleControllerPatchRequest PartialSchedule
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPatch: (id: string, scheduleControllerPatchRequest: ScheduleControllerPatchRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a new command schedule. Resource: schedules Authorized roles: administrator
     * @summary Post
     * @param {ScheduleControllerPostRequest} scheduleControllerPostRequest Schedule
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPost: (scheduleControllerPostRequest: ScheduleControllerPostRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Query command schedules for an organization. Resource: schedules Authorized roles: viewer
     * @summary Query
     * @param {ScheduleControllerQueryRequest} scheduleControllerQueryRequest SchedulesQuery
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerQuery: (scheduleControllerQueryRequest: ScheduleControllerQueryRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ScheduleApi - functional programming interface
 * @export
 */
export declare const ScheduleApiFp: (configuration?: Configuration) => {
    /**
     * Delete a command schedule. Resource: schedules Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerDelete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Get a command schedule by command schedule ID. Resource: schedules Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerGetOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduleControllerPostRequest>>;
    /**
     * Update an existing command schedule. Resource: schedules Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {ScheduleControllerPatchRequest} scheduleControllerPatchRequest PartialSchedule
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPatch(id: string, scheduleControllerPatchRequest: ScheduleControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduleControllerPostRequest>>;
    /**
     * Create a new command schedule. Resource: schedules Authorized roles: administrator
     * @summary Post
     * @param {ScheduleControllerPostRequest} scheduleControllerPostRequest Schedule
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPost(scheduleControllerPostRequest: ScheduleControllerPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduleControllerPostRequest>>;
    /**
     * Query command schedules for an organization. Resource: schedules Authorized roles: viewer
     * @summary Query
     * @param {ScheduleControllerQueryRequest} scheduleControllerQueryRequest SchedulesQuery
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerQuery(scheduleControllerQueryRequest: ScheduleControllerQueryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ScheduleControllerQuery200Response>>;
};
/**
 * ScheduleApi - factory interface
 * @export
 */
export declare const ScheduleApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a command schedule. Resource: schedules Authorized roles: administrator
     * @summary Delete
     * @param {ScheduleApiScheduleControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerDelete(requestParameters: ScheduleApiScheduleControllerDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Get a command schedule by command schedule ID. Resource: schedules Authorized roles: viewer
     * @summary Get one
     * @param {ScheduleApiScheduleControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerGetOne(requestParameters: ScheduleApiScheduleControllerGetOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleControllerPostRequest>;
    /**
     * Update an existing command schedule. Resource: schedules Authorized roles: administrator
     * @summary Patch
     * @param {ScheduleApiScheduleControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPatch(requestParameters: ScheduleApiScheduleControllerPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleControllerPostRequest>;
    /**
     * Create a new command schedule. Resource: schedules Authorized roles: administrator
     * @summary Post
     * @param {ScheduleApiScheduleControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerPost(requestParameters: ScheduleApiScheduleControllerPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleControllerPostRequest>;
    /**
     * Query command schedules for an organization. Resource: schedules Authorized roles: viewer
     * @summary Query
     * @param {ScheduleApiScheduleControllerQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleControllerQuery(requestParameters: ScheduleApiScheduleControllerQueryRequest, options?: RawAxiosRequestConfig): AxiosPromise<ScheduleControllerQuery200Response>;
};
/**
 * Request parameters for scheduleControllerDelete operation in ScheduleApi.
 * @export
 * @interface ScheduleApiScheduleControllerDeleteRequest
 */
export interface ScheduleApiScheduleControllerDeleteRequest {
    /**
     *
     * @type {string}
     * @memberof ScheduleApiScheduleControllerDelete
     */
    readonly id: string;
}
/**
 * Request parameters for scheduleControllerGetOne operation in ScheduleApi.
 * @export
 * @interface ScheduleApiScheduleControllerGetOneRequest
 */
export interface ScheduleApiScheduleControllerGetOneRequest {
    /**
     *
     * @type {string}
     * @memberof ScheduleApiScheduleControllerGetOne
     */
    readonly id: string;
}
/**
 * Request parameters for scheduleControllerPatch operation in ScheduleApi.
 * @export
 * @interface ScheduleApiScheduleControllerPatchRequest
 */
export interface ScheduleApiScheduleControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof ScheduleApiScheduleControllerPatch
     */
    readonly id: string;
    /**
     * PartialSchedule
     * @type {ScheduleControllerPatchRequest}
     * @memberof ScheduleApiScheduleControllerPatch
     */
    readonly scheduleControllerPatchRequest: ScheduleControllerPatchRequest;
}
/**
 * Request parameters for scheduleControllerPost operation in ScheduleApi.
 * @export
 * @interface ScheduleApiScheduleControllerPostRequest
 */
export interface ScheduleApiScheduleControllerPostRequest {
    /**
     * Schedule
     * @type {ScheduleControllerPostRequest}
     * @memberof ScheduleApiScheduleControllerPost
     */
    readonly scheduleControllerPostRequest: ScheduleControllerPostRequest;
}
/**
 * Request parameters for scheduleControllerQuery operation in ScheduleApi.
 * @export
 * @interface ScheduleApiScheduleControllerQueryRequest
 */
export interface ScheduleApiScheduleControllerQueryRequest {
    /**
     * SchedulesQuery
     * @type {ScheduleControllerQueryRequest}
     * @memberof ScheduleApiScheduleControllerQuery
     */
    readonly scheduleControllerQueryRequest: ScheduleControllerQueryRequest;
}
/**
 * ScheduleApi - object-oriented interface
 * @export
 * @class ScheduleApi
 * @extends {BaseAPI}
 */
export declare class ScheduleApi extends BaseAPI {
    /**
     * Delete a command schedule. Resource: schedules Authorized roles: administrator
     * @summary Delete
     * @param {ScheduleApiScheduleControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduleApi
     */
    scheduleControllerDelete(requestParameters: ScheduleApiScheduleControllerDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Get a command schedule by command schedule ID. Resource: schedules Authorized roles: viewer
     * @summary Get one
     * @param {ScheduleApiScheduleControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduleApi
     */
    scheduleControllerGetOne(requestParameters: ScheduleApiScheduleControllerGetOneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ScheduleControllerPostRequest, any>>;
    /**
     * Update an existing command schedule. Resource: schedules Authorized roles: administrator
     * @summary Patch
     * @param {ScheduleApiScheduleControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduleApi
     */
    scheduleControllerPatch(requestParameters: ScheduleApiScheduleControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ScheduleControllerPostRequest, any>>;
    /**
     * Create a new command schedule. Resource: schedules Authorized roles: administrator
     * @summary Post
     * @param {ScheduleApiScheduleControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduleApi
     */
    scheduleControllerPost(requestParameters: ScheduleApiScheduleControllerPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ScheduleControllerPostRequest, any>>;
    /**
     * Query command schedules for an organization. Resource: schedules Authorized roles: viewer
     * @summary Query
     * @param {ScheduleApiScheduleControllerQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduleApi
     */
    scheduleControllerQuery(requestParameters: ScheduleApiScheduleControllerQueryRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ScheduleControllerQuery200Response, any>>;
}