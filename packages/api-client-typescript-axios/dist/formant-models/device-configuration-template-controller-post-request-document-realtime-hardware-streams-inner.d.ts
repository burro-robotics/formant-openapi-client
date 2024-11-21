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
 * @interface DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
 */
export interface DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner {
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'label'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'rtcStreamType': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerRtcStreamTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'mode': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerModeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'hwDescriptor': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'hardwareType': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerHardwareTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'rtspEncodingNeeded'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'isOnvif'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'ipCamUsername'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'ipCamPassword'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'quality': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerQualityEnum;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'overlayClock'?: boolean;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'bitrate'?: number;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInner
     */
    'disableAdaptiveQuality'?: boolean;
}
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerRtcStreamTypeEnum: {
    readonly Ping: "ping";
    readonly Pong: "pong";
    readonly PingV2: "ping-v2";
    readonly PongV2: "pong-v2";
    readonly StreamControl: "stream-control";
    readonly StreamsInfo: "streams-info";
    readonly AgentInfo: "agent-info";
    readonly Numeric: "numeric";
    readonly Boolean: "boolean";
    readonly Bitset: "bitset";
    readonly Twist: "twist";
    readonly CompressedImage: "compressed-image";
    readonly H264VideoFrame: "h264-video-frame";
    readonly AudioChunk: "audio-chunk";
    readonly Pose: "pose";
    readonly GoalId: "goal-id";
    readonly JointState: "joint-state";
    readonly PoseWithCovariance: "pose-with-covariance";
    readonly PointCloud: "point-cloud";
    readonly Point: "point";
    readonly MarkerArray: "marker-array";
    readonly JsonString: "json-string";
    readonly Odometry: "odometry";
    readonly Joy: "joy";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerRtcStreamTypeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerRtcStreamTypeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerRtcStreamTypeEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerModeEnum: {
    readonly Command: "command";
    readonly Observe: "observe";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerModeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerModeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerModeEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerHardwareTypeEnum: {
    readonly Ip: "ip";
    readonly Usb: "usb";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerHardwareTypeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerHardwareTypeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerHardwareTypeEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerQualityEnum: {
    readonly _1080p: "1080p";
    readonly _720p: "720p";
    readonly _480p: "480p";
    readonly _360p: "360p";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerQualityEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerQualityEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeHardwareStreamsInnerQualityEnum];