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
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     *
     * @type {string}
     * @memberof ModelFile
     */
    'url': string;
    /**
     *
     * @type {string}
     * @memberof ModelFile
     */
    'filename': string;
    /**
     *
     * @type {number}
     * @memberof ModelFile
     */
    'size': number;
    /**
     *
     * @type {string}
     * @memberof ModelFile
     */
    'previewUrl'?: string;
}