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
 * @interface Battery
 */
export interface Battery {
    /**
     *
     * @type {number}
     * @memberof Battery
     */
    'percentage': number;
    /**
     *
     * @type {number}
     * @memberof Battery
     */
    'voltage'?: number;
    /**
     *
     * @type {number}
     * @memberof Battery
     */
    'current'?: number;
    /**
     *
     * @type {number}
     * @memberof Battery
     */
    'charge'?: number;
}