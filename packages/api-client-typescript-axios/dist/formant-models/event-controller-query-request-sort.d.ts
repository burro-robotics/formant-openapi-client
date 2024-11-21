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
 * @interface EventControllerQueryRequestSort
 */
export interface EventControllerQueryRequestSort {
    /**
     *
     * @type {string}
     * @memberof EventControllerQueryRequestSort
     */
    'column': EventControllerQueryRequestSortColumnEnum;
    /**
     *
     * @type {string}
     * @memberof EventControllerQueryRequestSort
     */
    'order': EventControllerQueryRequestSortOrderEnum;
}
export declare const EventControllerQueryRequestSortColumnEnum: {
    readonly Type: "type";
    readonly Message: "message";
    readonly DeviceName: "device.name";
    readonly Time: "time";
    readonly EventCreatedAt: "event.createdAt";
    readonly EventUpdatedAt: "event.updatedAt";
};
export type EventControllerQueryRequestSortColumnEnum = typeof EventControllerQueryRequestSortColumnEnum[keyof typeof EventControllerQueryRequestSortColumnEnum];
export declare const EventControllerQueryRequestSortOrderEnum: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type EventControllerQueryRequestSortOrderEnum = typeof EventControllerQueryRequestSortOrderEnum[keyof typeof EventControllerQueryRequestSortOrderEnum];