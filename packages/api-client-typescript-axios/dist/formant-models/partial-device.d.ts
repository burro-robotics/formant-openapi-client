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
import { AnnotationTemplateControllerPostRequestDeviceScope } from './annotation-template-controller-post-request-device-scope';
import { DeviceControllerPostRequestDeviceScope } from './device-controller-post-request-device-scope';
import { DeviceControllerPostRequestFollowersInner } from './device-controller-post-request-followers-inner';
import { DeviceControllerPostRequestState } from './device-controller-post-request-state';
/**
 *
 * @export
 * @interface PartialDevice
 */
export interface PartialDevice {
    /**
     * ID of the organization which contains this device.
     * @type {string}
     * @memberof PartialDevice
     */
    'organizationId'?: string;
    /**
     * Name of this device.
     * @type {string}
     * @memberof PartialDevice
     */
    'name'?: string;
    /**
     * Description of this device.
     * @type {string}
     * @memberof PartialDevice
     */
    'description'?: string | null;
    /**
     * Enter `default`.
     * @type {string}
     * @memberof PartialDevice
     */
    'type'?: PartialDeviceTypeEnum;
    /**
     * ID of the user associated with this device.
     * @type {string}
     * @memberof PartialDevice
     */
    'userId'?: string | null;
    /**
     * ID of the fleet with which this device is associated.
     * @type {string}
     * @memberof PartialDevice
     */
    'fleetId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'publicKey'?: string;
    /**
     *
     * @type {AnnotationTemplateControllerPostRequestDeviceScope}
     * @memberof PartialDevice
     */
    'scope'?: AnnotationTemplateControllerPostRequestDeviceScope | null;
    /**
     *
     * @type {DeviceControllerPostRequestDeviceScope}
     * @memberof PartialDevice
     */
    'deviceScope'?: DeviceControllerPostRequestDeviceScope;
    /**
     * Agent version you want to install if different from the latest version. Must have `formant-sidecar` installed.
     * @type {string}
     * @memberof PartialDevice
     */
    'desiredAgentVersion'?: string | null;
    /**
     * Device configuration version you want to apply. Ignore for new device configuration.
     * @type {number}
     * @memberof PartialDevice
     */
    'desiredConfigurationVersion'?: number | null;
    /**
     *
     * @type {number}
     * @memberof PartialDevice
     */
    'temporaryConfigurationVersion'?: number | null;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'temporaryConfigurationExpiration'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'temporaryConfigurationTemplateId'?: string | null;
    /**
     * Users who receive SMS updates from this device.
     * @type {Array<DeviceControllerPostRequestFollowersInner>}
     * @memberof PartialDevice
     */
    'followers'?: Array<DeviceControllerPostRequestFollowersInner>;
    /**
     * Slack channels which receive updates from this device.
     * @type {Set<string>}
     * @memberof PartialDevice
     */
    'slackChannels'?: Set<string>;
    /**
     *
     * @type {DeviceControllerPostRequestState}
     * @memberof PartialDevice
     */
    'state'?: DeviceControllerPostRequestState;
    /**
     *
     * @type {boolean}
     * @memberof PartialDevice
     */
    'enabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PartialDevice
     */
    'fullyConfigured'?: boolean;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'disabledAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialDevice
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PartialDevice
     */
    'tags'?: {
        [key: string]: string;
    };
}
export declare const PartialDeviceTypeEnum: {
    readonly Default: "default";
    readonly Capture: "capture";
};
export type PartialDeviceTypeEnum = typeof PartialDeviceTypeEnum[keyof typeof PartialDeviceTypeEnum];