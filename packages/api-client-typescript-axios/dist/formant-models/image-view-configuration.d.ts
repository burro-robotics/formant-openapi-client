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
 * @interface ImageViewConfiguration
 */
export interface ImageViewConfiguration {
    /**
     *
     * @type {string}
     * @memberof ImageViewConfiguration
     */
    'mode'?: ImageViewConfigurationModeEnum;
}
export declare const ImageViewConfigurationModeEnum: {
    readonly Device: "device";
    readonly Time: "time";
};
export type ImageViewConfigurationModeEnum = typeof ImageViewConfigurationModeEnum[keyof typeof ImageViewConfigurationModeEnum];
