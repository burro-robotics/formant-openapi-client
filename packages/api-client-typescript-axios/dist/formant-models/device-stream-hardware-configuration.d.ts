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
 * @interface DeviceStreamHardwareConfiguration
 */
export interface DeviceStreamHardwareConfiguration {
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'type': DeviceStreamHardwareConfigurationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'hwDescriptor': string;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'audioHwDescriptor'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'hardwareType': DeviceStreamHardwareConfigurationHardwareTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'rtspEncodingNeeded'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'isOnvif'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'overlayClock'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'ipCamUsername'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'ipCamPassword'?: string;
    /**
     *
     * @type {number}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'bitrate'?: number;
    /**
     *
     * @type {boolean}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'disableAdaptiveQuality'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamHardwareConfiguration
     */
    'quality'?: DeviceStreamHardwareConfigurationQualityEnum;
}
export declare const DeviceStreamHardwareConfigurationTypeEnum: {
    readonly Hardware: "hardware";
};
export type DeviceStreamHardwareConfigurationTypeEnum = typeof DeviceStreamHardwareConfigurationTypeEnum[keyof typeof DeviceStreamHardwareConfigurationTypeEnum];
export declare const DeviceStreamHardwareConfigurationHardwareTypeEnum: {
    readonly Ip: "ip";
    readonly Usb: "usb";
};
export type DeviceStreamHardwareConfigurationHardwareTypeEnum = typeof DeviceStreamHardwareConfigurationHardwareTypeEnum[keyof typeof DeviceStreamHardwareConfigurationHardwareTypeEnum];
export declare const DeviceStreamHardwareConfigurationQualityEnum: {
    readonly _1080p: "1080p";
    readonly _720p: "720p";
    readonly _480p: "480p";
    readonly _360p: "360p";
};
export type DeviceStreamHardwareConfigurationQualityEnum = typeof DeviceStreamHardwareConfigurationQualityEnum[keyof typeof DeviceStreamHardwareConfigurationQualityEnum];
