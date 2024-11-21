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
/**
 *
 * @export
 * @interface TaskSummaryFormatControllerList200ResponseItemsInner
 */
export interface TaskSummaryFormatControllerList200ResponseItemsInner {
    /**
     * ID of the organization in which to create this new task summary format.
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'organizationId'?: string;
    /**
     * User-friendly name for this task summary format.
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'label': string;
    /**
     * Enter the data structure for this task summary format in key-value pairs.
     * @type {object}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'format': object;
    /**
     * Internal use only, ignore.
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'deletedAt'?: string | null;
    /**
     *
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof TaskSummaryFormatControllerList200ResponseItemsInner
     */
    'updatedAt'?: string;
}
