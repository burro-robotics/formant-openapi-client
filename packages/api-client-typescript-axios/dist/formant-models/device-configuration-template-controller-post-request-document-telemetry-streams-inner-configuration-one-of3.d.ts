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
 * @interface DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
 */
export interface DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3 {
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'type': DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3TypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'baseReferenceFrame': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'odomTopic': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'mapTopic'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'pointCloudTopics'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'pathTopic'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3
     */
    'goalTopic'?: string;
}
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3TypeEnum: {
    readonly RosLocalization: "ros-localization";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3TypeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3TypeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentTelemetryStreamsInnerConfigurationOneOf3TypeEnum];
