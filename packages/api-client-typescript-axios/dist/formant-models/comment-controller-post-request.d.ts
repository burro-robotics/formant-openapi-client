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
 * @interface CommentControllerPostRequest
 */
export interface CommentControllerPostRequest {
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'type'?: CommentControllerPostRequestTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'editedAt'?: string;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'userId': string;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof CommentControllerPostRequest
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     * ID of the organization in which to create this new event.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'organizationId'?: string;
    /**
     * Start time of the data range relevant to this event.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'time': string;
    /**
     * End time of the data range relevant to this event.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'endTime'?: string | null;
    /**
     * If this custom event is related to another event, you can add the ID of that parent event here.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'parentId'?: string;
    /**
     * User-customizable metadata associated with this event in key-value pair format.
     * @type {{ [key: string]: string; }}
     * @memberof CommentControllerPostRequest
     */
    'metadata'?: {
        [key: string]: string;
    };
    /**
     * Message of this event. Must match the `message` field in the Formant UI when configuring a custom event.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'message'?: string;
    /**
     *
     * @type {boolean}
     * @memberof CommentControllerPostRequest
     */
    'viewed'?: boolean;
    /**
     * ID of the device relevant to this event.
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'deviceId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'streamName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'streamType'?: CommentControllerPostRequestStreamTypeEnum | null;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'eventTriggerId'?: string | null;
    /**
     * Set this to `true` to enable notifications for this event.
     * @type {boolean}
     * @memberof CommentControllerPostRequest
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof CommentControllerPostRequest
     */
    'deletedAt'?: string | null;
}
export declare const CommentControllerPostRequestTypeEnum: {
    readonly TriggeredEvent: "triggered-event";
    readonly DatapointEvent: "datapoint-event";
    readonly DeviceOnline: "device-online";
    readonly DeviceOffline: "device-offline";
    readonly InterventionRequest: "intervention-request";
    readonly InterventionResponse: "intervention-response";
    readonly TeleopSessionRecord: "teleop-session-record";
    readonly PortForwardingSessionRecord: "port-forwarding-session-record";
    readonly CommandRequest: "command-request";
    readonly CommandResponse: "command-response";
    readonly CommandDelivery: "command-delivery";
    readonly Custom: "custom";
    readonly Comment: "comment";
    readonly System: "system";
    readonly Annotation: "annotation";
    readonly TaskSummary: "task-summary";
    readonly Stateful: "stateful";
};
export type CommentControllerPostRequestTypeEnum = typeof CommentControllerPostRequestTypeEnum[keyof typeof CommentControllerPostRequestTypeEnum];
export declare const CommentControllerPostRequestStreamTypeEnum: {
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
export type CommentControllerPostRequestStreamTypeEnum = typeof CommentControllerPostRequestStreamTypeEnum[keyof typeof CommentControllerPostRequestStreamTypeEnum];