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
import { EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner } from './event-controller-query200-response-items-inner-one-of1-data-one-of1-labels-inner';
/**
 *
 * @export
 * @interface TagTemplate
 */
export interface TagTemplate {
    /**
     * ID of the organization to which to add this tag template.
     * @type {string}
     * @memberof TagTemplate
     */
    'organizationId'?: string;
    /**
     * Key of this tag template.
     * @type {any}
     * @memberof TagTemplate
     */
    'tagKey': any;
    /**
     * Is this tag used to create device groups?
     * @type {boolean}
     * @memberof TagTemplate
     */
    'isGroup'?: boolean;
    /**
     * Is this tag used to filter telemetry data?
     * @type {boolean}
     * @memberof TagTemplate
     */
    'isTelemetryFilter'?: boolean;
    /**
     * Is this tag used to filter events?
     * @type {boolean}
     * @memberof TagTemplate
     */
    'isEventFilter'?: boolean;
    /**
     * Set this to `false` to delete this tag template.
     * @type {boolean}
     * @memberof TagTemplate
     */
    'enabled'?: boolean;
    /**
     * Description of this tag template.
     * @type {string}
     * @memberof TagTemplate
     */
    'description'?: string | null;
    /**
     * Internal use only, ignore.
     * @type {string}
     * @memberof TagTemplate
     */
    'labelSetId'?: string | null;
    /**
     * Internal use only, ignore.
     * @type {Array<EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner>}
     * @memberof TagTemplate
     */
    'labelEnum'?: Array<EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner> | null;
    /**
     *
     * @type {string}
     * @memberof TagTemplate
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof TagTemplate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof TagTemplate
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof TagTemplate
     */
    'tags'?: {
        [key: string]: string;
    };
}