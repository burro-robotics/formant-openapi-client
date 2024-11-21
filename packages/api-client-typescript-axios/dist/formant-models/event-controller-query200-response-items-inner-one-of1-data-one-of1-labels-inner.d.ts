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
 * @interface EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner
 */
export interface EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner {
    /**
     * Value corresponding to the user-friendly description for this label. This will be passed as the response to this intervention request.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner
     */
    'value': string;
    /**
     * User-friendly description of label. This will be presented to the user in a dropdown.
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner
     */
    'displayName'?: string;
    /**
     *
     * @type {string}
     * @memberof EventControllerQuery200ResponseItemsInnerOneOf1DataOneOf1LabelsInner
     */
    'description'?: string;
}