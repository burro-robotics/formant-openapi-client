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
import { CaptureSessionControllerAuthenticate200Response } from '../formant-models';
import { CaptureSessionControllerPostRequest } from '../formant-models';
/**
 * CaptureSessionApi - axios parameter creator
 * @export
 */
export declare const CaptureSessionApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Authenticate
     * @param {string} code
     * @param {boolean} [includeCaptureSession]
     * @param {boolean} [includeScope]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerAuthenticate: (code: string, includeCaptureSession?: boolean, includeScope?: boolean, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a capture session
     * @summary Get one
     * @param {string} code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerGetOne: (code: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a new capture session. Resource: capture Authorized roles: operator
     * @summary Post
     * @param {CaptureSessionControllerPostRequest} captureSessionControllerPostRequest CaptureSession
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerPost: (captureSessionControllerPostRequest: CaptureSessionControllerPostRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CaptureSessionApi - functional programming interface
 * @export
 */
export declare const CaptureSessionApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Authenticate
     * @param {string} code
     * @param {boolean} [includeCaptureSession]
     * @param {boolean} [includeScope]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerAuthenticate(code: string, includeCaptureSession?: boolean, includeScope?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CaptureSessionControllerAuthenticate200Response>>;
    /**
     * Get a capture session
     * @summary Get one
     * @param {string} code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerGetOne(code: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CaptureSessionControllerPostRequest>>;
    /**
     * Create a new capture session. Resource: capture Authorized roles: operator
     * @summary Post
     * @param {CaptureSessionControllerPostRequest} captureSessionControllerPostRequest CaptureSession
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerPost(captureSessionControllerPostRequest: CaptureSessionControllerPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CaptureSessionControllerPostRequest>>;
};
/**
 * CaptureSessionApi - factory interface
 * @export
 */
export declare const CaptureSessionApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Authenticate
     * @param {CaptureSessionApiCaptureSessionControllerAuthenticateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerAuthenticate(requestParameters: CaptureSessionApiCaptureSessionControllerAuthenticateRequest, options?: RawAxiosRequestConfig): AxiosPromise<CaptureSessionControllerAuthenticate200Response>;
    /**
     * Get a capture session
     * @summary Get one
     * @param {CaptureSessionApiCaptureSessionControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerGetOne(requestParameters: CaptureSessionApiCaptureSessionControllerGetOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<CaptureSessionControllerPostRequest>;
    /**
     * Create a new capture session. Resource: capture Authorized roles: operator
     * @summary Post
     * @param {CaptureSessionApiCaptureSessionControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    captureSessionControllerPost(requestParameters: CaptureSessionApiCaptureSessionControllerPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<CaptureSessionControllerPostRequest>;
};
/**
 * Request parameters for captureSessionControllerAuthenticate operation in CaptureSessionApi.
 * @export
 * @interface CaptureSessionApiCaptureSessionControllerAuthenticateRequest
 */
export interface CaptureSessionApiCaptureSessionControllerAuthenticateRequest {
    /**
     *
     * @type {string}
     * @memberof CaptureSessionApiCaptureSessionControllerAuthenticate
     */
    readonly code: string;
    /**
     *
     * @type {boolean}
     * @memberof CaptureSessionApiCaptureSessionControllerAuthenticate
     */
    readonly includeCaptureSession?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CaptureSessionApiCaptureSessionControllerAuthenticate
     */
    readonly includeScope?: boolean;
}
/**
 * Request parameters for captureSessionControllerGetOne operation in CaptureSessionApi.
 * @export
 * @interface CaptureSessionApiCaptureSessionControllerGetOneRequest
 */
export interface CaptureSessionApiCaptureSessionControllerGetOneRequest {
    /**
     *
     * @type {string}
     * @memberof CaptureSessionApiCaptureSessionControllerGetOne
     */
    readonly code: string;
}
/**
 * Request parameters for captureSessionControllerPost operation in CaptureSessionApi.
 * @export
 * @interface CaptureSessionApiCaptureSessionControllerPostRequest
 */
export interface CaptureSessionApiCaptureSessionControllerPostRequest {
    /**
     * CaptureSession
     * @type {CaptureSessionControllerPostRequest}
     * @memberof CaptureSessionApiCaptureSessionControllerPost
     */
    readonly captureSessionControllerPostRequest: CaptureSessionControllerPostRequest;
}
/**
 * CaptureSessionApi - object-oriented interface
 * @export
 * @class CaptureSessionApi
 * @extends {BaseAPI}
 */
export declare class CaptureSessionApi extends BaseAPI {
    /**
     *
     * @summary Authenticate
     * @param {CaptureSessionApiCaptureSessionControllerAuthenticateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaptureSessionApi
     */
    captureSessionControllerAuthenticate(requestParameters: CaptureSessionApiCaptureSessionControllerAuthenticateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CaptureSessionControllerAuthenticate200Response, any>>;
    /**
     * Get a capture session
     * @summary Get one
     * @param {CaptureSessionApiCaptureSessionControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaptureSessionApi
     */
    captureSessionControllerGetOne(requestParameters: CaptureSessionApiCaptureSessionControllerGetOneRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CaptureSessionControllerPostRequest, any>>;
    /**
     * Create a new capture session. Resource: capture Authorized roles: operator
     * @summary Post
     * @param {CaptureSessionApiCaptureSessionControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CaptureSessionApi
     */
    captureSessionControllerPost(requestParameters: CaptureSessionApiCaptureSessionControllerPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CaptureSessionControllerPostRequest, any>>;
}