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
 * @interface EventSort
 */
export interface EventSort {
    /**
     *
     * @type {string}
     * @memberof EventSort
     */
    'column': EventSortColumnEnum;
    /**
     *
     * @type {string}
     * @memberof EventSort
     */
    'order': EventSortOrderEnum;
}
export declare const EventSortColumnEnum: {
    readonly Type: "type";
    readonly Message: "message";
    readonly DeviceName: "device.name";
    readonly Time: "time";
    readonly EventCreatedAt: "event.createdAt";
    readonly EventUpdatedAt: "event.updatedAt";
};
export type EventSortColumnEnum = typeof EventSortColumnEnum[keyof typeof EventSortColumnEnum];
export declare const EventSortOrderEnum: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type EventSortOrderEnum = typeof EventSortOrderEnum[keyof typeof EventSortOrderEnum];
