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
import { CommandRequestControllerPoll200Response } from '../formant-models';
import { CommandRequestControllerPollRequest } from '../formant-models';
/**
 * CommandRequestApi - axios parameter creator
 * @export
 */
export declare const CommandRequestApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Poll for command requests Resource: commands Authorized roles: device
     * @summary Poll
     * @param {CommandRequestControllerPollRequest} commandRequestControllerPollRequest PollCommandRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    commandRequestControllerPoll: (commandRequestControllerPollRequest: CommandRequestControllerPollRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CommandRequestApi - functional programming interface
 * @export
 */
export declare const CommandRequestApiFp: (configuration?: Configuration) => {
    /**
     * Poll for command requests Resource: commands Authorized roles: device
     * @summary Poll
     * @param {CommandRequestControllerPollRequest} commandRequestControllerPollRequest PollCommandRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    commandRequestControllerPoll(commandRequestControllerPollRequest: CommandRequestControllerPollRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CommandRequestControllerPoll200Response>>;
};
/**
 * CommandRequestApi - factory interface
 * @export
 */
export declare const CommandRequestApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Poll for command requests Resource: commands Authorized roles: device
     * @summary Poll
     * @param {CommandRequestApiCommandRequestControllerPollRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    commandRequestControllerPoll(requestParameters: CommandRequestApiCommandRequestControllerPollRequest, options?: RawAxiosRequestConfig): AxiosPromise<CommandRequestControllerPoll200Response>;
};
/**
 * Request parameters for commandRequestControllerPoll operation in CommandRequestApi.
 * @export
 * @interface CommandRequestApiCommandRequestControllerPollRequest
 */
export interface CommandRequestApiCommandRequestControllerPollRequest {
    /**
     * PollCommandRequest
     * @type {CommandRequestControllerPollRequest}
     * @memberof CommandRequestApiCommandRequestControllerPoll
     */
    readonly commandRequestControllerPollRequest: CommandRequestControllerPollRequest;
}
/**
 * CommandRequestApi - object-oriented interface
 * @export
 * @class CommandRequestApi
 * @extends {BaseAPI}
 */
export declare class CommandRequestApi extends BaseAPI {
    /**
     * Poll for command requests Resource: commands Authorized roles: device
     * @summary Poll
     * @param {CommandRequestApiCommandRequestControllerPollRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommandRequestApi
     */
    commandRequestControllerPoll(requestParameters: CommandRequestApiCommandRequestControllerPollRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CommandRequestControllerPoll200Response, any>>;
}
