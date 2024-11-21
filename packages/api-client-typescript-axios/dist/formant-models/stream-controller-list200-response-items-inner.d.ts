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
 * @interface StreamControllerList200ResponseItemsInner
 */
export interface StreamControllerList200ResponseItemsInner {
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'streamName': string;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'streamType': StreamControllerList200ResponseItemsInnerStreamTypeEnum;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'alias'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'isTelemetryFilter'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'isEventFilter'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'active'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'isOverviewColumn'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'isOverviewRow'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof StreamControllerList200ResponseItemsInner
     */
    'updatedAt'?: string;
}
export declare const StreamControllerList200ResponseItemsInnerStreamTypeEnum: {
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
export type StreamControllerList200ResponseItemsInnerStreamTypeEnum = typeof StreamControllerList200ResponseItemsInnerStreamTypeEnum[keyof typeof StreamControllerList200ResponseItemsInnerStreamTypeEnum];