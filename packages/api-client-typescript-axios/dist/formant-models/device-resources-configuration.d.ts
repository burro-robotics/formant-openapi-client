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
import { DeviceConfigurationTemplateControllerPostRequestDocumentResourcesDisk } from './device-configuration-template-controller-post-request-document-resources-disk';
/**
 *
 * @export
 * @interface DeviceResourcesConfiguration
 */
export interface DeviceResourcesConfiguration {
    /**
     *
     * @type {DeviceConfigurationTemplateControllerPostRequestDocumentResourcesDisk}
     * @memberof DeviceResourcesConfiguration
     */
    'disk'?: DeviceConfigurationTemplateControllerPostRequestDocumentResourcesDisk;
    /**
     *
     * @type {number}
     * @memberof DeviceResourcesConfiguration
     */
    'streamThrottleHz'?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof DeviceResourcesConfiguration
     */
    'lowBandwidthAgent'?: boolean | null;
    /**
     *
     * @type {number}
     * @memberof DeviceResourcesConfiguration
     */
    'datapointBatchSize'?: number | null;
    /**
     *
     * @type {number}
     * @memberof DeviceResourcesConfiguration
     */
    'datapointBatchLifetimeMs'?: number | null;
    /**
     *
     * @type {number}
     * @memberof DeviceResourcesConfiguration
     */
    'assetBatchSize'?: number | null;
    /**
     *
     * @type {number}
     * @memberof DeviceResourcesConfiguration
     */
    'assetBatchLifetimeMs'?: number | null;
}
