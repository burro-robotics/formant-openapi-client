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
import { EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3BitConditionsInner } from './event-trigger-controller-get-all200-response-items-inner-condition-one-of3-bit-conditions-inner';
/**
 *
 * @export
 * @interface EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3
 */
export interface EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3 {
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3
     */
    'type': EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3TypeEnum;
    /**
     *
     * @type {Array<EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3BitConditionsInner>}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3
     */
    'bitConditions': Array<EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3BitConditionsInner>;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3
     */
    'operator': EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3OperatorEnum;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3
     */
    'stream': string;
}
export declare const EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3TypeEnum: {
    readonly Bitset: "bitset";
};
export type EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3TypeEnum = typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3TypeEnum[keyof typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3TypeEnum];
export declare const EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3OperatorEnum: {
    readonly Any: "any";
    readonly All: "all";
};
export type EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3OperatorEnum = typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3OperatorEnum[keyof typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf3OperatorEnum];
