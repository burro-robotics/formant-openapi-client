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
import { ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfiguration } from './channel-controller-get-all200-response-items-inner-configuration-inner-configuration';
/**
 *
 * @export
 * @interface ViewConfiguration
 */
export interface ViewConfiguration {
    /**
     *
     * @type {string}
     * @memberof ViewConfiguration
     */
    'streamName': string;
    /**
     *
     * @type {string}
     * @memberof ViewConfiguration
     */
    'type': ViewConfigurationTypeEnum;
    /**
     *
     * @type {ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfiguration}
     * @memberof ViewConfiguration
     */
    'configuration': ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfiguration;
}
export declare const ViewConfigurationTypeEnum: {
    readonly Bitset: "bitset";
    readonly Localization: "localization";
    readonly PointCloud: "point cloud";
    readonly Location: "location";
    readonly File: "file";
    readonly Health: "health";
    readonly TransformTree: "transform tree";
    readonly Battery: "battery";
    readonly Video: "video";
    readonly NumericSet: "numeric set";
    readonly Json: "json";
    readonly Image: "image";
    readonly Numeric: "numeric";
    readonly Text: "text";
};
export type ViewConfigurationTypeEnum = typeof ViewConfigurationTypeEnum[keyof typeof ViewConfigurationTypeEnum];
