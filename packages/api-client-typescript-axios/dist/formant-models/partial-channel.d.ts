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
import { ChannelControllerGetAll200ResponseItemsInnerConfigurationInner } from './channel-controller-get-all200-response-items-inner-configuration-inner';
import { ChannelControllerGetAll200ResponseItemsInnerFilter } from './channel-controller-get-all200-response-items-inner-filter';
/**
 *
 * @export
 * @interface PartialChannel
 */
export interface PartialChannel {
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'description'?: string;
    /**
     *
     * @type {ChannelControllerGetAll200ResponseItemsInnerFilter}
     * @memberof PartialChannel
     */
    'filter'?: ChannelControllerGetAll200ResponseItemsInnerFilter | null;
    /**
     *
     * @type {any}
     * @memberof PartialChannel
     */
    'layout'?: any;
    /**
     *
     * @type {Array<ChannelControllerGetAll200ResponseItemsInnerConfigurationInner>}
     * @memberof PartialChannel
     */
    'configuration'?: Array<ChannelControllerGetAll200ResponseItemsInnerConfigurationInner>;
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialChannel
     */
    'updatedAt'?: string;
}
