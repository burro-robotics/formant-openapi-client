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
 * @interface Stream
 */
export interface Stream {
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'streamName': string;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'streamType': StreamStreamTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'alias'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'isTelemetryFilter'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'isEventFilter'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'active'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'isOverviewColumn'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'isOverviewRow'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Stream
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Stream
     */
    'updatedAt'?: string;
}
export declare const StreamStreamTypeEnum: {
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
export type StreamStreamTypeEnum = typeof StreamStreamTypeEnum[keyof typeof StreamStreamTypeEnum];
