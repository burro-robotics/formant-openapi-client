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
import { DeviceConfigurationTemplateControllerPostRequestDocument } from './device-configuration-template-controller-post-request-document';
/**
 *
 * @export
 * @interface DeviceConfigurationTemplate
 */
export interface DeviceConfigurationTemplate {
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplate
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplate
     */
    'name': string;
    /**
     *
     * @type {DeviceConfigurationTemplateControllerPostRequestDocument}
     * @memberof DeviceConfigurationTemplate
     */
    'document': DeviceConfigurationTemplateControllerPostRequestDocument;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplate
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplate
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplate
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof DeviceConfigurationTemplate
     */
    'tags'?: {
        [key: string]: string;
    };
}
