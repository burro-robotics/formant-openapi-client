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
 * @interface WebhooksInfoWebhooksInner
 */
export interface WebhooksInfoWebhooksInner {
    /**
     *
     * @type {any}
     * @memberof WebhooksInfoWebhooksInner
     */
    'name': any;
    /**
     *
     * @type {string}
     * @memberof WebhooksInfoWebhooksInner
     */
    'url': string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof WebhooksInfoWebhooksInner
     */
    'headers'?: {
        [key: string]: string;
    };
}