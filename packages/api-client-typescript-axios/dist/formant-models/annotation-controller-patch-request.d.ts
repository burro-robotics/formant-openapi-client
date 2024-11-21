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
import { AnnotationControllerPostRequestFocusedDataPointsInner } from './annotation-controller-post-request-focused-data-points-inner';
/**
 *
 * @export
 * @interface AnnotationControllerPatchRequest
 */
export interface AnnotationControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'type'?: AnnotationControllerPatchRequestTypeEnum;
    /**
     * Internal use only, ignore.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'editedAt'?: string | null;
    /**
     * User associated with this annotation.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'userId'?: string;
    /**
     * If you want to create this annotation from an existing annotation template, enter its ID here.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'annotationTemplateId'?: string | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationControllerPatchRequest
     */
    'taggedUsers'?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationControllerPatchRequest
     */
    'publishedTo'?: any;
    /**
     * Description of this annotation.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'note'?: string | null;
    /**
     *
     * @type {Array<AnnotationControllerPostRequestFocusedDataPointsInner>}
     * @memberof AnnotationControllerPatchRequest
     */
    'focusedDataPoints'?: Array<AnnotationControllerPostRequestFocusedDataPointsInner> | null;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof AnnotationControllerPatchRequest
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     * ID of the organization in which to create this new event.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     * Start time of the data range relevant to this event.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'time'?: string;
    /**
     * End time of the data range relevant to this event.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'endTime'?: string | null;
    /**
     * If this custom event is related to another event, you can add the ID of that parent event here.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'parentId'?: string;
    /**
     * User-customizable metadata associated with this event in key-value pair format.
     * @type {{ [key: string]: string; }}
     * @memberof AnnotationControllerPatchRequest
     */
    'metadata'?: {
        [key: string]: string;
    };
    /**
     * Message of this event. Must match the `message` field in the Formant UI when configuring a custom event.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'message'?: string;
    /**
     *
     * @type {boolean}
     * @memberof AnnotationControllerPatchRequest
     */
    'viewed'?: boolean;
    /**
     * ID of the device relevant to this event.
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'deviceId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'streamName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'streamType'?: AnnotationControllerPatchRequestStreamTypeEnum | null;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'eventTriggerId'?: string | null;
    /**
     * Set this to `true` to enable notifications for this event.
     * @type {boolean}
     * @memberof AnnotationControllerPatchRequest
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof AnnotationControllerPatchRequest
     */
    'deletedAt'?: string | null;
}
export declare const AnnotationControllerPatchRequestTypeEnum: {
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
export type AnnotationControllerPatchRequestTypeEnum = typeof AnnotationControllerPatchRequestTypeEnum[keyof typeof AnnotationControllerPatchRequestTypeEnum];
export declare const AnnotationControllerPatchRequestStreamTypeEnum: {
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
export type AnnotationControllerPatchRequestStreamTypeEnum = typeof AnnotationControllerPatchRequestStreamTypeEnum[keyof typeof AnnotationControllerPatchRequestStreamTypeEnum];
