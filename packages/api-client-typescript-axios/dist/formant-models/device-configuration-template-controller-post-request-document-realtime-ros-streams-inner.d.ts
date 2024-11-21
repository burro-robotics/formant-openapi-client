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
 * @interface DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
 */
export interface DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner {
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'label'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'topicName': string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'valueTopicName'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'topicType': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerTopicTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'mode': DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerModeEnum;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'encodeVideo'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'overlayClock'?: boolean;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'statusTopic'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'plannedTopic'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'endEffectorTopic'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'endEffectorLinkName'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'planValidTopic'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'baseReferenceFrame'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'localFrame'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'audioCodec'?: DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerAudioCodecEnum;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'min'?: number;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'max'?: number;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'defaultValue'?: number;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'step'?: number;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'numericControlVisualization'?: DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerNumericControlVisualizationEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'quality'?: DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerQualityEnum;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'mouseEventsTargetStream'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'buttonColor'?: string;
    /**
     *
     * @type {string}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'buttonLabel'?: string;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'bitrate'?: number;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'disableAdaptiveQuality'?: boolean;
    /**
     *
     * @type {number}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'joyFrequency'?: number;
    /**
     *
     * @type {boolean}
     * @memberof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInner
     */
    'joyDisableButtonMapping'?: boolean;
}
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerTopicTypeEnum: {
    readonly StdMsgsFloat64: "std_msgs/Float64";
    readonly StdMsgsBool: "std_msgs/Bool";
    readonly GeometryMsgsTwist: "geometry_msgs/Twist";
    readonly SensorMsgsCompressedImage: "sensor_msgs/CompressedImage";
    readonly GeometryMsgsPoseStamped: "geometry_msgs/PoseStamped";
    readonly ActionlibMsgsGoalId: "actionlib_msgs/GoalID";
    readonly FormantH264VideoFrame: "formant/H264VideoFrame";
    readonly AudioCommonMsgsAudioData: "audio_common_msgs/AudioData";
    readonly SensorMsgsJointState: "sensor_msgs/JointState";
    readonly GeometryMsgsPoseWithCovarianceStamped: "geometry_msgs/PoseWithCovarianceStamped";
    readonly SensorMsgsLaserScan: "sensor_msgs/LaserScan";
    readonly SensorMsgsPointCloud2: "sensor_msgs/PointCloud2";
    readonly GeometryMsgsPointStamped: "geometry_msgs/PointStamped";
    readonly VisualizationMsgsMarkerArray: "visualization_msgs/MarkerArray";
    readonly NavMsgsOdometry: "nav_msgs/Odometry";
    readonly SensorMsgsJoy: "sensor_msgs/Joy";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerTopicTypeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerTopicTypeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerTopicTypeEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerModeEnum: {
    readonly Command: "command";
    readonly Observe: "observe";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerModeEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerModeEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerModeEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerAudioCodecEnum: {
    readonly Raw: "raw";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerAudioCodecEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerAudioCodecEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerAudioCodecEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerNumericControlVisualizationEnum: {
    readonly Slider: "slider";
    readonly Dial: "dial";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerNumericControlVisualizationEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerNumericControlVisualizationEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerNumericControlVisualizationEnum];
export declare const DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerQualityEnum: {
    readonly _1080p: "1080p";
    readonly _720p: "720p";
    readonly _480p: "480p";
    readonly _360p: "360p";
};
export type DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerQualityEnum = typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerQualityEnum[keyof typeof DeviceConfigurationTemplateControllerPostRequestDocumentRealtimeRosStreamsInnerQualityEnum];
