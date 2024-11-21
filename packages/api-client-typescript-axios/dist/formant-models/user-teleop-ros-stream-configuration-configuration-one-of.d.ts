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
import { UserTeleopTwistRosTopicConfigurationJoystick } from './user-teleop-twist-ros-topic-configuration-joystick';
/**
 *
 * @export
 * @interface UserTeleopRosStreamConfigurationConfigurationOneOf
 */
export interface UserTeleopRosStreamConfigurationConfigurationOneOf {
    /**
     *
     * @type {string}
     * @memberof UserTeleopRosStreamConfigurationConfigurationOneOf
     */
    'type': UserTeleopRosStreamConfigurationConfigurationOneOfTypeEnum;
    /**
     *
     * @type {UserTeleopTwistRosTopicConfigurationJoystick}
     * @memberof UserTeleopRosStreamConfigurationConfigurationOneOf
     */
    'joystick': UserTeleopTwistRosTopicConfigurationJoystick;
}
export declare const UserTeleopRosStreamConfigurationConfigurationOneOfTypeEnum: {
    readonly GeometryMsgsTwist: "geometry_msgs/Twist";
};
export type UserTeleopRosStreamConfigurationConfigurationOneOfTypeEnum = typeof UserTeleopRosStreamConfigurationConfigurationOneOfTypeEnum[keyof typeof UserTeleopRosStreamConfigurationConfigurationOneOfTypeEnum];
