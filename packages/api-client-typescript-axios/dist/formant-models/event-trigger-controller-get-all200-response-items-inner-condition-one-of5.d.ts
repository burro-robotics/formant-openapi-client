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
import { EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5ConditionsInner } from './event-trigger-controller-get-all200-response-items-inner-condition-one-of5-conditions-inner';
/**
 *
 * @export
 * @interface EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5
 */
export interface EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5 {
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5
     */
    'type': EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5TypeEnum;
    /**
     *
     * @type {Array<EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5ConditionsInner>}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5
     */
    'conditions': Array<EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5ConditionsInner>;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5
     */
    'operator': EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5OperatorEnum;
    /**
     *
     * @type {string}
     * @memberof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5
     */
    'stream': string;
}
export declare const EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5TypeEnum: {
    readonly NumericSet: "numeric set";
};
export type EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5TypeEnum = typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5TypeEnum[keyof typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5TypeEnum];
export declare const EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5OperatorEnum: {
    readonly Any: "any";
    readonly All: "all";
};
export type EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5OperatorEnum = typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5OperatorEnum[keyof typeof EventTriggerControllerGetAll200ResponseItemsInnerConditionOneOf5OperatorEnum];