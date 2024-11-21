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
import { DeviceControllerPostRequestDeviceScope } from './device-controller-post-request-device-scope';
/**
 *
 * @export
 * @interface PartialFleet
 */
export interface PartialFleet {
    /**
     * ID of the organization to which to add this fleet.
     * @type {string}
     * @memberof PartialFleet
     */
    'organizationId'?: string;
    /**
     * Name of this fleet.
     * @type {string}
     * @memberof PartialFleet
     */
    'name'?: string;
    /**
     *
     * @type {DeviceControllerPostRequestDeviceScope}
     * @memberof PartialFleet
     */
    'scope'?: DeviceControllerPostRequestDeviceScope;
    /**
     *
     * @type {string}
     * @memberof PartialFleet
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialFleet
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialFleet
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PartialFleet
     */
    'tags'?: {
        [key: string]: string;
    };
}