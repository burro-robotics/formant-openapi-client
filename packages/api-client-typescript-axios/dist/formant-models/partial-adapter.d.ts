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
 * @interface PartialAdapter
 */
export interface PartialAdapter {
    /**
     * ID of the organization to which you want to add this adapter.
     * @type {string}
     * @memberof PartialAdapter
     */
    'organizationId'?: string;
    /**
     * Name of this adapter.
     * @type {string}
     * @memberof PartialAdapter
     */
    'name'?: string;
    /**
     * ID of the zip file which contains the adapter you want to add.
     * @type {string}
     * @memberof PartialAdapter
     */
    'fileId'?: string;
    /**
     * Enter the execution command to start this adapter (typically `./start.sh`).
     * @type {string}
     * @memberof PartialAdapter
     */
    'execCommand'?: string;
    /**
     * Enter the configuration schema for this adapter (max 5000 characters).
     * @type {string}
     * @memberof PartialAdapter
     */
    'configurationSchema'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialAdapter
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialAdapter
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialAdapter
     */
    'updatedAt'?: string;
}