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
 * @interface DeviceStreamDirectoryWatchConfiguration
 */
export interface DeviceStreamDirectoryWatchConfiguration {
    /**
     *
     * @type {string}
     * @memberof DeviceStreamDirectoryWatchConfiguration
     */
    'type': DeviceStreamDirectoryWatchConfigurationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamDirectoryWatchConfiguration
     */
    'directory': string;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamDirectoryWatchConfiguration
     */
    'extension'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceStreamDirectoryWatchConfiguration
     */
    'fileType'?: DeviceStreamDirectoryWatchConfigurationFileTypeEnum;
}
export declare const DeviceStreamDirectoryWatchConfigurationTypeEnum: {
    readonly DirectoryWatch: "directory-watch";
};
export type DeviceStreamDirectoryWatchConfigurationTypeEnum = typeof DeviceStreamDirectoryWatchConfigurationTypeEnum[keyof typeof DeviceStreamDirectoryWatchConfigurationTypeEnum];
export declare const DeviceStreamDirectoryWatchConfigurationFileTypeEnum: {
    readonly File: "file";
    readonly Image: "image";
    readonly Video: "video";
    readonly PointCloud: "point-cloud";
};
export type DeviceStreamDirectoryWatchConfigurationFileTypeEnum = typeof DeviceStreamDirectoryWatchConfigurationFileTypeEnum[keyof typeof DeviceStreamDirectoryWatchConfigurationFileTypeEnum];