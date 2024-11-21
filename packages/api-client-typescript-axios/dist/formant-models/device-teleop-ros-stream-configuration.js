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
exports.DeviceTeleopRosStreamConfigurationQualityEnum = exports.DeviceTeleopRosStreamConfigurationNumericControlVisualizationEnum = exports.DeviceTeleopRosStreamConfigurationAudioCodecEnum = exports.DeviceTeleopRosStreamConfigurationModeEnum = exports.DeviceTeleopRosStreamConfigurationTopicTypeEnum = void 0;
exports.DeviceTeleopRosStreamConfigurationTopicTypeEnum = {
    StdMsgsFloat64: 'std_msgs/Float64',
    StdMsgsBool: 'std_msgs/Bool',
    GeometryMsgsTwist: 'geometry_msgs/Twist',
    SensorMsgsCompressedImage: 'sensor_msgs/CompressedImage',
    GeometryMsgsPoseStamped: 'geometry_msgs/PoseStamped',
    ActionlibMsgsGoalId: 'actionlib_msgs/GoalID',
    FormantH264VideoFrame: 'formant/H264VideoFrame',
    AudioCommonMsgsAudioData: 'audio_common_msgs/AudioData',
    SensorMsgsJointState: 'sensor_msgs/JointState',
    GeometryMsgsPoseWithCovarianceStamped: 'geometry_msgs/PoseWithCovarianceStamped',
    SensorMsgsLaserScan: 'sensor_msgs/LaserScan',
    SensorMsgsPointCloud2: 'sensor_msgs/PointCloud2',
    GeometryMsgsPointStamped: 'geometry_msgs/PointStamped',
    VisualizationMsgsMarkerArray: 'visualization_msgs/MarkerArray',
    NavMsgsOdometry: 'nav_msgs/Odometry',
    SensorMsgsJoy: 'sensor_msgs/Joy'
};
exports.DeviceTeleopRosStreamConfigurationModeEnum = {
    Command: 'command',
    Observe: 'observe'
};
exports.DeviceTeleopRosStreamConfigurationAudioCodecEnum = {
    Raw: 'raw'
};
exports.DeviceTeleopRosStreamConfigurationNumericControlVisualizationEnum = {
    Slider: 'slider',
    Dial: 'dial'
};
exports.DeviceTeleopRosStreamConfigurationQualityEnum = {
    _1080p: '1080p',
    _720p: '720p',
    _480p: '480p',
    _360p: '360p'
};