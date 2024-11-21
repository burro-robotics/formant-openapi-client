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
/**
 *
 * @export
 * @interface EventTriggerGroupControllerPatchRequest
 */
export interface EventTriggerGroupControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {boolean}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'enabled'?: boolean;
    /**
     *
     * @type {DeviceControllerPostRequestDeviceScopeViews}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'deviceScope'?: DeviceControllerPostRequestDeviceScopeViews | null;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'smsTags'?: {
        [key: string]: string;
    };
    /**
     * User\'s phone numbers (e.g., +14155550100).
     * @type {Array<string>}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'phoneNumbers'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof EventTriggerGroupControllerPatchRequest
     */
    'tags'?: {
        [key: string]: string;
    };
}
