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
import { DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeCustomStreamsInner } from './device-configuration-template-controller-post-request-document-realtime-custom-streams-inner';
import { DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner } from './device-configuration-template-controller-post-request-document-realtime-hardware-streams-inner';
import { DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner } from './device-configuration-template-controller-post-request-document-realtime-ros-streams-inner';
/**
 *
 * @export
 * @interface DeviceRealtimeConfiguration
 */
export interface DeviceRealtimeConfiguration {
    /**
     *
     * @type {Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner>}
     * @memberof DeviceRealtimeConfiguration
     */
    'rosStreams'?: Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner>;
    /**
     *
     * @type {Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeCustomStreamsInner>}
     * @memberof DeviceRealtimeConfiguration
     */
    'customStreams'?: Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeCustomStreamsInner>;
    /**
     *
     * @type {Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner>}
     * @memberof DeviceRealtimeConfiguration
     */
    'hardwareStreams'?: Array<DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner>;
}