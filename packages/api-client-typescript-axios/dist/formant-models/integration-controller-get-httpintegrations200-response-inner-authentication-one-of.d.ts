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
/**
 *
 * @export
 * @interface IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOf
 */
export interface IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOf {
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOf
     */
    'type': IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOfTypeEnum;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOf
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOf
     */
    'password': string;
}
export declare const IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOfTypeEnum: {
    readonly Basic: "basic";
};
export type IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOfTypeEnum = typeof IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOfTypeEnum[keyof typeof IntegrationControllerGetHTTPIntegrations200ResponseInnerAuthenticationOneOfTypeEnum];
