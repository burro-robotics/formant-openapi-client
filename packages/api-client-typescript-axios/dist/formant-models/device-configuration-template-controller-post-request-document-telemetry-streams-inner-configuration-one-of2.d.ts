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
 * @interface DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2
 */
export interface DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2 {
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2
     */
    'type': DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2TypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2
     */
    'topic': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2
     */
    'path'?: string;
}
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2TypeEnum: {
    readonly RosTopic: "ros-topic";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2TypeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2TypeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf2TypeEnum];
