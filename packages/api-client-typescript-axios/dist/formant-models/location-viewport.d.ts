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
import { ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfigurationOneOf2ViewportCenter } from './channel-controller-get-all200-response-items-inner-configuration-inner-configuration-one-of2-viewport-center';
/**
 *
 * @export
 * @interface LocationViewport
 */
export interface LocationViewport {
    /**
     *
     * @type {ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfigurationOneOf2ViewportCenter}
     * @memberof LocationViewport
     */
    'center': ChannelControllerGetAll200ResponseItemsInnerConfigurationInnerConfigurationOneOf2ViewportCenter;
    /**
     *
     * @type {number}
     * @memberof LocationViewport
     */
    'zoom': number;
}