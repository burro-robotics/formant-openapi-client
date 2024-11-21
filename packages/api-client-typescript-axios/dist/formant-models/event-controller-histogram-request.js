"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventControllerHistogramRequestSeveritiesEnum = exports.EventControllerHistogramRequestEventTypesEnum = exports.EventControllerHistogramRequestTypesEnum = exports.EventControllerHistogramRequestIntervalEnum = void 0;
exports.EventControllerHistogramRequestIntervalEnum = {
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day',
    Month: 'month',
    Year: 'year'
};
exports.EventControllerHistogramRequestTypesEnum = {
    Bitset: 'bitset',
    Localization: 'localization',
    PointCloud: 'point cloud',
    Location: 'location',
    File: 'file',
    Health: 'health',
    TransformTree: 'transform tree',
    Battery: 'battery',
    Video: 'video',
    NumericSet: 'numeric set',
    Json: 'json',
    Image: 'image',
    Numeric: 'numeric',
    Text: 'text'
};
exports.EventControllerHistogramRequestEventTypesEnum = {
    TriggeredEvent: 'triggered-event',
    DatapointEvent: 'datapoint-event',
    DeviceOnline: 'device-online',
    DeviceOffline: 'device-offline',
    InterventionRequest: 'intervention-request',
    InterventionResponse: 'intervention-response',
    TeleopSessionRecord: 'teleop-session-record',
    PortForwardingSessionRecord: 'port-forwarding-session-record',
    CommandRequest: 'command-request',
    CommandResponse: 'command-response',
    CommandDelivery: 'command-delivery',
    Custom: 'custom',
    Comment: 'comment',
    System: 'system',
    Annotation: 'annotation',
    TaskSummary: 'task-summary',
    Stateful: 'stateful'
};
exports.EventControllerHistogramRequestSeveritiesEnum = {
    Info: 'info',
    Warning: 'warning',
    Error: 'error',
    Critical: 'critical'
};
