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
import { EventControllerQuery200ResponseItemsInnerOneOf1Data } from './event-controller-query200-response-items-inner-one-of1-data';
/**
 *
 * @export
 * @interface InterventionRequest
 */
export interface InterventionRequest {
    /**
     * Enter `intervention-request`.
     * @type {string}
     * @memberof InterventionRequest
     */
    'type'?: InterventionRequestTypeEnum;
    /**
     * `selection` prompts user to select an option from a dropdown menu. `labeling` prompts user to draw a box around and object and give it a label.
     * @type {string}
     * @memberof InterventionRequest
     */
    'interventionType'?: InterventionRequestInterventionTypeEnum;
    /**
     *
     * @type {EventControllerQuery200ResponseItemsInnerOneOf1Data}
     * @memberof InterventionRequest
     */
    'data': EventControllerQuery200ResponseItemsInnerOneOf1Data;
    /**
     *
     * @type {Array<any>}
     * @memberof InterventionRequest
     */
    'responses'?: Array<any>;
    /**
     * ID of the device which prompts this intervention request.
     * @type {string}
     * @memberof InterventionRequest
     */
    'agentId'?: string;
    /**
     * Severity of this event (`info`, `warning`, `error`, or `critical`).
     * @type {string}
     * @memberof InterventionRequest
     */
    'severity'?: InterventionRequestSeverityEnum;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof InterventionRequest
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     * ID of the organization in which to create this new event.
     * @type {string}
     * @memberof InterventionRequest
     */
    'organizationId'?: string;
    /**
     * Start time of the data range relevant to this event.
     * @type {string}
     * @memberof InterventionRequest
     */
    'time': string;
    /**
     * End time of the data range relevant to this event.
     * @type {string}
     * @memberof InterventionRequest
     */
    'endTime'?: string | null;
    /**
     * If this custom event is related to another event, you can add the ID of that parent event here.
     * @type {string}
     * @memberof InterventionRequest
     */
    'parentId'?: string;
    /**
     * User-customizable metadata associated with this event in key-value pair format.
     * @type {{ [key: string]: string; }}
     * @memberof InterventionRequest
     */
    'metadata'?: {
        [key: string]: string;
    };
    /**
     * Message of this event. Must match the `message` field in the Formant UI when configuring a custom event.
     * @type {string}
     * @memberof InterventionRequest
     */
    'message'?: string;
    /**
     *
     * @type {boolean}
     * @memberof InterventionRequest
     */
    'viewed'?: boolean;
    /**
     * ID of the device relevant to this event.
     * @type {string}
     * @memberof InterventionRequest
     */
    'deviceId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'streamName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'streamType'?: InterventionRequestStreamTypeEnum | null;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'eventTriggerId'?: string | null;
    /**
     * Set this to `true` to enable notifications for this event.
     * @type {boolean}
     * @memberof InterventionRequest
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof InterventionRequest
     */
    'deletedAt'?: string | null;
}
export declare const InterventionRequestTypeEnum: {
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
export type InterventionRequestTypeEnum = typeof InterventionRequestTypeEnum[keyof typeof InterventionRequestTypeEnum];
export declare const InterventionRequestInterventionTypeEnum: {
    readonly Selection: "selection";
    readonly Labeling: "labeling";
    readonly Teleop: "teleop";
    readonly Physical: "physical";
};
export type InterventionRequestInterventionTypeEnum = typeof InterventionRequestInterventionTypeEnum[keyof typeof InterventionRequestInterventionTypeEnum];
export declare const InterventionRequestSeverityEnum: {
    readonly Info: "info";
    readonly Warning: "warning";
    readonly Error: "error";
    readonly Critical: "critical";
};
export type InterventionRequestSeverityEnum = typeof InterventionRequestSeverityEnum[keyof typeof InterventionRequestSeverityEnum];
export declare const InterventionRequestStreamTypeEnum: {
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
export type InterventionRequestStreamTypeEnum = typeof InterventionRequestStreamTypeEnum[keyof typeof InterventionRequestStreamTypeEnum];
