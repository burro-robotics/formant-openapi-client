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
import { IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthentication } from './integration-controller-get-httpintegrations200-response-inner-authentication';
/**
 *
 * @export
 * @interface IntegrationControllerUpdateHTTPIntegrationRequest
 */
export interface IntegrationControllerUpdateHTTPIntegrationRequest {
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'url'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'method'?: IntegrationControllerUpdateHTTPIntegrationRequestMethodEnum;
    /**
     *
     * @type {IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthentication}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'authentication'?: IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthentication;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerUpdateHTTPIntegrationRequest
     */
    'updatedAt'?: string;
}
export declare const IntegrationControllerUpdateHTTPIntegrationRequestMethodEnum: {
    readonly Post: "POST";
    readonly Get: "GET";
};
export type IntegrationControllerUpdateHTTPIntegrationRequestMethodEnum = typeof IntegrationControllerUpdateHTTPIntegrationRequestMethodEnum[keyof typeof IntegrationControllerUpdateHTTPIntegrationRequestMethodEnum];
