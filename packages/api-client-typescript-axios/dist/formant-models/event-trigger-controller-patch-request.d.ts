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
import { DeviceControllerPostRequestDeviceScopeViews } from './device-controller-post-request-device-scope-views';
import { EventTriggerControllerGetAll200ResponseItemsInnerCommandsInner } from './event-trigger-controller-get-all200-response-items-inner-commands-inner';
import { EventTriggerControllerGetAll200ResponseItemsInnerCondition } from './event-trigger-controller-get-all200-response-items-inner-condition';
import { EventTriggerControllerGetAll200ResponseItemsInnerForwardingConfiguration } from './event-trigger-controller-get-all200-response-items-inner-forwarding-configuration';
import { EventTriggerControllerGetAll200ResponseItemsInnerPredicate } from './event-trigger-controller-get-all200-response-items-inner-predicate';
import { EventTriggerControllerGetAll200ResponseItemsInnerStatefulTriggerConfiguration } from './event-trigger-controller-get-all200-response-items-inner-stateful-trigger-configuration';
import { EventTriggerControllerGetAll200ResponseItemsInnerTriggeredConfiguration } from './event-trigger-controller-get-all200-response-items-inner-triggered-configuration';
import { EventTriggerControllerGetAll200ResponseItemsInnerWorkflowsInner } from './event-trigger-controller-get-all200-response-items-inner-workflows-inner';
/**
 *
 * @export
 * @interface EventTriggerControllerPatchRequest
 */
export interface EventTriggerControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'eventType'?: EventTriggerControllerPatchRequestEventTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'message'?: string;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerCondition}
     * @memberof EventTriggerControllerPatchRequest
     */
    'condition'?: EventTriggerControllerGetAll200ResponseItemsInnerCondition | null;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerCondition}
     * @memberof EventTriggerControllerPatchRequest
     */
    'exitCondition'?: EventTriggerControllerGetAll200ResponseItemsInnerCondition | null;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerPredicate}
     * @memberof EventTriggerControllerPatchRequest
     */
    'predicate'?: EventTriggerControllerGetAll200ResponseItemsInnerPredicate | null;
    /**
     *
     * @type {number}
     * @memberof EventTriggerControllerPatchRequest
     */
    'interval'?: number;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'severity'?: EventTriggerControllerPatchRequestSeverityEnum;
    /**
     *
     * @type {boolean}
     * @memberof EventTriggerControllerPatchRequest
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'format'?: string;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerTriggeredConfiguration}
     * @memberof EventTriggerControllerPatchRequest
     */
    'triggeredConfiguration'?: EventTriggerControllerGetAll200ResponseItemsInnerTriggeredConfiguration | null;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EventTriggerControllerPatchRequest
     */
    'smsTags'?: {
        [key: string]: string;
    };
    /**
     *
     * @type {DeviceControllerPostRequestDeviceScopeViews}
     * @memberof EventTriggerControllerPatchRequest
     */
    'deviceScope'?: DeviceControllerPostRequestDeviceScopeViews | null;
    /**
     *
     * @type {Array<EventTriggerControllerGetAll200ResponseItemsInnerCommandsInner>}
     * @memberof EventTriggerControllerPatchRequest
     */
    'commands'?: Array<EventTriggerControllerGetAll200ResponseItemsInnerCommandsInner>;
    /**
     *
     * @type {Array<EventTriggerControllerGetAll200ResponseItemsInnerWorkflowsInner>}
     * @memberof EventTriggerControllerPatchRequest
     */
    'workflows'?: Array<EventTriggerControllerGetAll200ResponseItemsInnerWorkflowsInner> | null;
    /**
     *
     * @type {boolean}
     * @memberof EventTriggerControllerPatchRequest
     */
    'notificationEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'lastTriggeredTime'?: string | null;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'eventTriggerGroupId'?: string | null;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerStatefulTriggerConfiguration}
     * @memberof EventTriggerControllerPatchRequest
     */
    'statefulTriggerConfiguration'?: EventTriggerControllerGetAll200ResponseItemsInnerStatefulTriggerConfiguration | null;
    /**
     *
     * @type {boolean}
     * @memberof EventTriggerControllerPatchRequest
     */
    'isStateful'?: boolean;
    /**
     *
     * @type {EventTriggerControllerGetAll200ResponseItemsInnerForwardingConfiguration}
     * @memberof EventTriggerControllerPatchRequest
     */
    'forwardingConfiguration'?: EventTriggerControllerGetAll200ResponseItemsInnerForwardingConfiguration | null;
    /**
     *
     * @type {boolean}
     * @memberof EventTriggerControllerPatchRequest
     */
    'setsDeviceColor'?: boolean;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerPatchRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EventTriggerControllerPatchRequest
     */
    'tags'?: {
        [key: string]: string;
    };
}
export declare const EventTriggerControllerPatchRequestEventTypeEnum: {
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
export type EventTriggerControllerPatchRequestEventTypeEnum = typeof EventTriggerControllerPatchRequestEventTypeEnum[keyof typeof EventTriggerControllerPatchRequestEventTypeEnum];
export declare const EventTriggerControllerPatchRequestSeverityEnum: {
    readonly Info: "info";
    readonly Warning: "warning";
    readonly Error: "error";
    readonly Critical: "critical";
};
export type EventTriggerControllerPatchRequestSeverityEnum = typeof EventTriggerControllerPatchRequestSeverityEnum[keyof typeof EventTriggerControllerPatchRequestSeverityEnum];