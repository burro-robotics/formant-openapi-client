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
 * @interface DatapointEvent
 */
export interface DatapointEvent {
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'type'?: DatapointEventTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof DatapointEvent
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     * ID of the organization in which to create this new event.
     * @type {string}
     * @memberof DatapointEvent
     */
    'organizationId'?: string;
    /**
     * Start time of the data range relevant to this event.
     * @type {string}
     * @memberof DatapointEvent
     */
    'time': string;
    /**
     * End time of the data range relevant to this event.
     * @type {string}
     * @memberof DatapointEvent
     */
    'endTime'?: string | null;
    /**
     * If this custom event is related to another event, you can add the ID of that parent event here.
     * @type {string}
     * @memberof DatapointEvent
     */
    'parentId'?: string;
    /**
     * User-customizable metadata associated with this event in key-value pair format.
     * @type {{ [key: string]: string; }}
     * @memberof DatapointEvent
     */
    'metadata'?: {
        [key: string]: string;
    };
    /**
     * Message of this event. Must match the `message` field in the Formant UI when configuring a custom event.
     * @type {string}
     * @memberof DatapointEvent
     */
    'message'?: string;
    /**
     *
     * @type {boolean}
     * @memberof DatapointEvent
     */
    'viewed'?: boolean;
    /**
     * ID of the device relevant to this event.
     * @type {string}
     * @memberof DatapointEvent
     */
    'deviceId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'streamName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'streamType'?: DatapointEventStreamTypeEnum | null;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'eventTriggerId'?: string | null;
    /**
     * Set this to `true` to enable notifications for this event.
     * @type {boolean}
     * @memberof DatapointEvent
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'severity': DatapointEventSeverityEnum;
    /**
     *
     * @type {number}
     * @memberof DatapointEvent
     */
    'interval': number;
    /**
     *
     * @type {string}
     * @memberof DatapointEvent
     */
    'intervalStart'?: string;
}
export declare const DatapointEventTypeEnum: {
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
export type DatapointEventTypeEnum = typeof DatapointEventTypeEnum[keyof typeof DatapointEventTypeEnum];
export declare const DatapointEventStreamTypeEnum: {
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
export type DatapointEventStreamTypeEnum = typeof DatapointEventStreamTypeEnum[keyof typeof DatapointEventStreamTypeEnum];
export declare const DatapointEventSeverityEnum: {
    readonly Info: "info";
    readonly Warning: "warning";
    readonly Error: "error";
    readonly Critical: "critical";
};
export type DatapointEventSeverityEnum = typeof DatapointEventSeverityEnum[keyof typeof DatapointEventSeverityEnum];
