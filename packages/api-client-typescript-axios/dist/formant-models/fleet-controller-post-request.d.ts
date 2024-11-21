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
 * @interface FleetControllerPostRequest
 */
export interface FleetControllerPostRequest {
    /**
     * ID of the organization to which to add this fleet.
     * @type {string}
     * @memberof FleetControllerPostRequest
     */
    'organizationId'?: string;
    /**
     * Name of this fleet.
     * @type {string}
     * @memberof FleetControllerPostRequest
     */
    'name': string;
    /**
     *
     * @type {DeviceControllerPostRequestDeviceScope}
     * @memberof FleetControllerPostRequest
     */
    'scope'?: DeviceControllerPostRequestDeviceScope;
    /**
     *
     * @type {string}
     * @memberof FleetControllerPostRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof FleetControllerPostRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof FleetControllerPostRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof FleetControllerPostRequest
     */
    'tags'?: {
        [key: string]: string;
    };
}