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
 * @interface IntegrationControllerSlack200Response
 */
export interface IntegrationControllerSlack200Response {
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerSlack200Response
     */
    'webhookUrl': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerSlack200Response
     */
    'webhookChannel': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerSlack200Response
     */
    'configurationUrl': string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerSlack200Response
     */
    'teamId'?: string;
    /**
     *
     * @type {string}
     * @memberof IntegrationControllerSlack200Response
     */
    'token'?: string;
}
