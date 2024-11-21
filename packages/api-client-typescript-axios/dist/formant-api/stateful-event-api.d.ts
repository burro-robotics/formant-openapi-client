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
import { CustomEventControllerPostRequest } from '../formant-models';
/**
 * StatefulEventApi - axios parameter creator
 * @export
 */
export declare const StatefulEventApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Create or update a stateful event Resource: events Authorized roles: device
     * @summary Put
     * @param {CustomEventControllerPostRequest} customEventControllerPostRequest StatefulEvent
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statefulEventControllerPut: (customEventControllerPostRequest: CustomEventControllerPostRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * StatefulEventApi - functional programming interface
 * @export
 */
export declare const StatefulEventApiFp: (configuration?: Configuration) => {
    /**
     * Create or update a stateful event Resource: events Authorized roles: device
     * @summary Put
     * @param {CustomEventControllerPostRequest} customEventControllerPostRequest StatefulEvent
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statefulEventControllerPut(customEventControllerPostRequest: CustomEventControllerPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomEventControllerPostRequest>>;
};
/**
 * StatefulEventApi - factory interface
 * @export
 */
export declare const StatefulEventApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Create or update a stateful event Resource: events Authorized roles: device
     * @summary Put
     * @param {StatefulEventApiStatefulEventControllerPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    statefulEventControllerPut(requestParameters: StatefulEventApiStatefulEventControllerPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<CustomEventControllerPostRequest>;
};
/**
 * Request parameters for statefulEventControllerPut operation in StatefulEventApi.
 * @export
 * @interface StatefulEventApiStatefulEventControllerPutRequest
 */
export interface StatefulEventApiStatefulEventControllerPutRequest {
    /**
     * StatefulEvent
     * @type {CustomEventControllerPostRequest}
     * @memberof StatefulEventApiStatefulEventControllerPut
     */
    readonly customEventControllerPostRequest: CustomEventControllerPostRequest;
}
/**
 * StatefulEventApi - object-oriented interface
 * @export
 * @class StatefulEventApi
 * @extends {BaseAPI}
 */
export declare class StatefulEventApi extends BaseAPI {
    /**
     * Create or update a stateful event Resource: events Authorized roles: device
     * @summary Put
     * @param {StatefulEventApiStatefulEventControllerPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatefulEventApi
     */
    statefulEventControllerPut(requestParameters: StatefulEventApiStatefulEventControllerPutRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CustomEventControllerPostRequest, any>>;
}
