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
 * @interface ChannelControllerGetAll200ResponseItemsInnerFilter
 */
export interface ChannelControllerGetAll200ResponseItemsInnerFilter {
    /**
     *
     * @type {Array<string>}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'types'?: Array<ChannelControllerGetAll200ResponseItemsInnerFilterTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'agentIds'?: Array<string>;
    /**
     *
     * @type {any}
     * @memberof ChannelControllerGetAll200ResponseItemsInnerFilter
     */
    'tags'?: any;
}
export declare const ChannelControllerGetAll200ResponseItemsInnerFilterTypesEnum: {
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
export type ChannelControllerGetAll200ResponseItemsInnerFilterTypesEnum = typeof ChannelControllerGetAll200ResponseItemsInnerFilterTypesEnum[keyof typeof ChannelControllerGetAll200ResponseItemsInnerFilterTypesEnum];