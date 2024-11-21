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
 * @interface ThresholdEventTriggerCondition
 */
export interface ThresholdEventTriggerCondition {
    /**
     *
     * @type {string}
     * @memberof ThresholdEventTriggerCondition
     */
    'type': ThresholdEventTriggerConditionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ThresholdEventTriggerCondition
     */
    'operator': ThresholdEventTriggerConditionOperatorEnum;
    /**
     *
     * @type {number}
     * @memberof ThresholdEventTriggerCondition
     */
    'value': number;
    /**
     *
     * @type {string}
     * @memberof ThresholdEventTriggerCondition
     */
    'stream': string;
}
export declare const ThresholdEventTriggerConditionTypeEnum: {
    readonly Threshold: "threshold";
};
export type ThresholdEventTriggerConditionTypeEnum = typeof ThresholdEventTriggerConditionTypeEnum[keyof typeof ThresholdEventTriggerConditionTypeEnum];
export declare const ThresholdEventTriggerConditionOperatorEnum: {
    readonly LessThan: "<";
    readonly LessThanOrEqualTo: "<=";
    readonly GreaterThan: ">";
    readonly GreaterThanOrEqualTo: ">=";
    readonly Equal: "==";
    readonly NotEqual: "!=";
};
export type ThresholdEventTriggerConditionOperatorEnum = typeof ThresholdEventTriggerConditionOperatorEnum[keyof typeof ThresholdEventTriggerConditionOperatorEnum];
