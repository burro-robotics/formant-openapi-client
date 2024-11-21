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
import { ChannelControllerGetAll200Response } from '../formant-models';
import { ChannelControllerGetAll200ResponseItemsInner } from '../formant-models';
import { ChannelControllerPatchRequest } from '../formant-models';
/**
 * ChannelApi - axios parameter creator
 * @export
 */
export declare const ChannelApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete a channel Resource: channels Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerDelete: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * List all channels Resource: channels Authorized roles: viewer
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetAll: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a channel Resource: channels Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetOne: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a channel Resource: channels Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {ChannelControllerPatchRequest} channelControllerPatchRequest PartialChannel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPatch: (id: string, channelControllerPatchRequest: ChannelControllerPatchRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a channel Resource: channels Authorized roles: administrator
     * @summary Post
     * @param {ChannelControllerGetAll200ResponseItemsInner} channelControllerGetAll200ResponseItemsInner Channel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPost: (channelControllerGetAll200ResponseItemsInner: ChannelControllerGetAll200ResponseItemsInner, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ChannelApi - functional programming interface
 * @export
 */
export declare const ChannelApiFp: (configuration?: Configuration) => {
    /**
     * Delete a channel Resource: channels Authorized roles: administrator
     * @summary Delete
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerDelete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * List all channels Resource: channels Authorized roles: viewer
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelControllerGetAll200Response>>;
    /**
     * Get a channel Resource: channels Authorized roles: viewer
     * @summary Get one
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>>;
    /**
     * Update a channel Resource: channels Authorized roles: administrator
     * @summary Patch
     * @param {string} id
     * @param {ChannelControllerPatchRequest} channelControllerPatchRequest PartialChannel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPatch(id: string, channelControllerPatchRequest: ChannelControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>>;
    /**
     * Create a channel Resource: channels Authorized roles: administrator
     * @summary Post
     * @param {ChannelControllerGetAll200ResponseItemsInner} channelControllerGetAll200ResponseItemsInner Channel
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPost(channelControllerGetAll200ResponseItemsInner: ChannelControllerGetAll200ResponseItemsInner, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>>;
};
/**
 * ChannelApi - factory interface
 * @export
 */
export declare const ChannelApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete a channel Resource: channels Authorized roles: administrator
     * @summary Delete
     * @param {ChannelApiChannelControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerDelete(requestParameters: ChannelApiChannelControllerDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * List all channels Resource: channels Authorized roles: viewer
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetAll(options?: RawAxiosRequestConfig): AxiosPromise<ChannelControllerGetAll200Response>;
    /**
     * Get a channel Resource: channels Authorized roles: viewer
     * @summary Get one
     * @param {ChannelApiChannelControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerGetOne(requestParameters: ChannelApiChannelControllerGetOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>;
    /**
     * Update a channel Resource: channels Authorized roles: administrator
     * @summary Patch
     * @param {ChannelApiChannelControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPatch(requestParameters: ChannelApiChannelControllerPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>;
    /**
     * Create a channel Resource: channels Authorized roles: administrator
     * @summary Post
     * @param {ChannelApiChannelControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    channelControllerPost(requestParameters: ChannelApiChannelControllerPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<ChannelControllerGetAll200ResponseItemsInner>;
};
/**
 * Request parameters for channelControllerDelete operation in ChannelApi.
 * @export
 * @interface ChannelApiChannelControllerDeleteRequest
 */
export interface ChannelApiChannelControllerDeleteRequest {
    /**
     *
     * @type {string}
     * @memberof ChannelApiChannelControllerDelete
     */
    readonly id: string;
}
/**
 * Request parameters for channelControllerGetOne operation in ChannelApi.
 * @export
 * @interface ChannelApiChannelControllerGetOneRequest
 */
export interface ChannelApiChannelControllerGetOneRequest {
    /**
     *
     * @type {string}
     * @memberof ChannelApiChannelControllerGetOne
     */
    readonly id: string;
}
/**
 * Request parameters for channelControllerPatch operation in ChannelApi.
 * @export
 * @interface ChannelApiChannelControllerPatchRequest
 */
export interface ChannelApiChannelControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof ChannelApiChannelControllerPatch
     */
    readonly id: string;
    /**
     * PartialChannel
     * @type {ChannelControllerPatchRequest}
     * @memberof ChannelApiChannelControllerPatch
     */
    readonly channelControllerPatchRequest: ChannelControllerPatchRequest;
}
/**
 * Request parameters for channelControllerPost operation in ChannelApi.
 * @export
 * @interface ChannelApiChannelControllerPostRequest
 */
export interface ChannelApiChannelControllerPostRequest {
    /**
     * Channel
     * @type {ChannelControllerGetAll200ResponseItemsInner}
     * @memberof ChannelApiChannelControllerPost
     */
    readonly channelControllerGetAll200ResponseItemsInner: ChannelControllerGetAll200ResponseItemsInner;
}
/**
 * ChannelApi - object-oriented interface
 * @export
 * @class ChannelApi
 * @extends {BaseAPI}
 */
export declare class ChannelApi extends BaseAPI {
    /**
     * Delete a channel Resource: channels Authorized roles: administrator
     * @summary Delete
     * @param {ChannelApiChannelControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelControllerDelete(requestParameters: ChannelApiChannelControllerDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * List all channels Resource: channels Authorized roles: viewer
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelControllerGetAll(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ChannelControllerGetAll200Response, any>>;
    /**
     * Get a channel Resource: channels Authorized roles: viewer
     * @summary Get one
     * @param {ChannelApiChannelControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelControllerGetOne(requestParameters: ChannelApiChannelControllerGetOneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ChannelControllerGetAll200ResponseItemsInner, any>>;
    /**
     * Update a channel Resource: channels Authorized roles: administrator
     * @summary Patch
     * @param {ChannelApiChannelControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelControllerPatch(requestParameters: ChannelApiChannelControllerPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ChannelControllerGetAll200ResponseItemsInner, any>>;
    /**
     * Create a channel Resource: channels Authorized roles: administrator
     * @summary Post
     * @param {ChannelApiChannelControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelApi
     */
    channelControllerPost(requestParameters: ChannelApiChannelControllerPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ChannelControllerGetAll200ResponseItemsInner, any>>;
}
