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
import { DeviceControllerPutConfigurationRequest } from './device-controller-put-configuration-request';
/**
 *
 * @export
 * @interface UpdatedConfigurationResponse
 */
export interface UpdatedConfigurationResponse {
    /**
     *
     * @type {DeviceControllerPutConfigurationRequest}
     * @memberof UpdatedConfigurationResponse
     */
    'desiredConfiguration'?: DeviceControllerPutConfigurationRequest | null;
}
