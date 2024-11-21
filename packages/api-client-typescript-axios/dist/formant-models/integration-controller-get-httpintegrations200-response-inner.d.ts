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
 * @interface IntegrationControllerGetHTTPIntegrations200ResponseInner
 */
export interface IntegrationControllerGetHTTPIntegrations200ResponseInner {
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'url': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'method': IntegrationControllerGetHTTPIntegrations200ResponseInnerMethodEnum;
    /**
     *
     * @type {IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthentication}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'authentication': IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthentication;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInner
     */
    'updatedAt'?: string;
}
export declare const IntegrationControllerGetHTTPIntegrations200ResponseInnerMethodEnum: {
    readonly Post: "POST";
    readonly Get: "GET";
};
export type IntegrationControllerGetHTTPIntegrations200ResponseInnerMethodEnum = typeof IntegrationControllerGetHTTPIntegrations200ResponseInnerMethodEnum[keyof typeof IntegrationControllerGetHTTPIntegrations200ResponseInnerMethodEnum];