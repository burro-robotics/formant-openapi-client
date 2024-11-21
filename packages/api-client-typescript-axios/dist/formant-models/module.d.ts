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
 * @interface Module
 */
export interface Module {
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'url': string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'previewImageUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'iconImageUrl'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'configurationSchemaUrl'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'defaultConfigurationId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'helpUrl'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Module
     */
    'fullscreen'?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof Module
     */
    'isEmbedded'?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'promptTemplateUrl'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Module
     */
    'updatedAt'?: string;
}
