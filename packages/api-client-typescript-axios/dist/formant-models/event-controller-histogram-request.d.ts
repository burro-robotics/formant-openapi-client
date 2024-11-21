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
 * @interface EventControllerHistogramRequest
 */
export interface EventControllerHistogramRequest {
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'interval': EventControllerHistogramRequestIntervalEnum;
    /**
     *
     * @type {number}
     * @memberof EventControllerHistogramRequest
     */
    'timezoneOffsetMinutes': number;
    /**
     *
     * @type {any}
     * @memberof EventControllerHistogramRequest
     */
    'tags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'types'?: Array<EventControllerHistogramRequestTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof EventControllerHistogramRequest
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'agentIds'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'start'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'end'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'id'?: string;
    /**
     *
     * @type {boolean}
     * @memberof EventControllerHistogramRequest
     */
    'viewed'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'keyword'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerHistogramRequest
     */
    'message'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'eventTypes'?: Array<EventControllerHistogramRequestEventTypesEnum>;
    /**
     *
     * @type {boolean}
     * @memberof EventControllerHistogramRequest
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'userIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'annotationTemplateIds'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof EventControllerHistogramRequest
     */
    'disableNullMatches'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof EventControllerHistogramRequest
     */
    'severities'?: Array<EventControllerHistogramRequestSeveritiesEnum>;
    /**
     *
     * @type {boolean}
     * @memberof EventControllerHistogramRequest
     */
    'setsDeviceColor'?: boolean;
}
export declare const EventControllerHistogramRequestIntervalEnum: {
    readonly Minute: "minute";
    readonly Hour: "hour";
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type EventControllerHistogramRequestIntervalEnum = typeof EventControllerHistogramRequestIntervalEnum[keyof typeof EventControllerHistogramRequestIntervalEnum];
export declare const EventControllerHistogramRequestTypesEnum: {
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
export type EventControllerHistogramRequestTypesEnum = typeof EventControllerHistogramRequestTypesEnum[keyof typeof EventControllerHistogramRequestTypesEnum];
export declare const EventControllerHistogramRequestEventTypesEnum: {
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
export type EventControllerHistogramRequestEventTypesEnum = typeof EventControllerHistogramRequestEventTypesEnum[keyof typeof EventControllerHistogramRequestEventTypesEnum];
export declare const EventControllerHistogramRequestSeveritiesEnum: {
    readonly Info: "info";
    readonly Warning: "warning";
    readonly Error: "error";
    readonly Critical: "critical";
};
export type EventControllerHistogramRequestSeveritiesEnum = typeof EventControllerHistogramRequestSeveritiesEnum[keyof typeof EventControllerHistogramRequestSeveritiesEnum];
