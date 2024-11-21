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
 * @interface EventControllerQuery200ResponseItemsInnerOneOf3
 */
export interface EventControllerQuery200ResponseItemsInnerOneOf3 {
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'type'?: EventControllerQuery200ResponseItemsInnerOneOf3TypeEnum;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     * ID of the organization in which to create this new event.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'organizationId'?: string;
    /**
     * Start time of the data range relevant to this event.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'time': string;
    /**
     * End time of the data range relevant to this event.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'endTime'?: string | null;
    /**
     * If this custom event is related to another event, you can add the ID of that parent event here.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'parentId'?: string;
    /**
     * User-customizable metadata associated with this event in key-value pair format.
     * @type {{ [key: string]: string; }}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'metadata'?: {
        [key: string]: string;
    };
    /**
     * Message of this event. Must match the `message` field in the Formant UI when configuring a custom event.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'message'?: string;
    /**
     *
     * @type {boolean}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'viewed'?: boolean;
    /**
     * ID of the device relevant to this event.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'deviceId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'streamName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'streamType'?: EventControllerQuery200ResponseItemsInnerOneOf3StreamTypeEnum | null;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'eventTriggerId'?: string | null;
    /**
     * Set this to `true` to enable notifications for this event.
     * @type {boolean}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf3
     */
    'commandId': string;
}
export declare const EventControllerQuery200ResponseItemsInnerOneOf3TypeEnum: {
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
export type EventControllerQuery200ResponseItemsInnerOneOf3TypeEnum = typeof EventControllerQuery200ResponseItemsInnerOneOf3TypeEnum[keyof typeof EventControllerQuery200ResponseItemsInnerOneOf3TypeEnum];
export declare const EventControllerQuery200ResponseItemsInnerOneOf3StreamTypeEnum: {
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
export type EventControllerQuery200ResponseItemsInnerOneOf3StreamTypeEnum = typeof EventControllerQuery200ResponseItemsInnerOneOf3StreamTypeEnum[keyof typeof EventControllerQuery200ResponseItemsInnerOneOf3StreamTypeEnum];
