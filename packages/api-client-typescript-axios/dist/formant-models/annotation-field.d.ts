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
import { AnnotationTemplateControllerPostRequestFieldsInnerParameters } from './annotation-template-controller-post-request-fields-inner-parameters';
/**
 *
 * @export
 * @interface AnnotationField
 */
export interface AnnotationField {
    /**
     *
     * @type {string}
     * @memberof AnnotationField
     */
    'type': AnnotationFieldTypeEnum;
    /**
     *
     * @type {any}
     * @memberof AnnotationField
     */
    'key': any;
    /**
     *
     * @type {string}
     * @memberof AnnotationField
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof AnnotationField
     */
    'description'?: string;
    /**
     *
     * @type {boolean}
     * @memberof AnnotationField
     */
    'required': boolean;
    /**
     *
     * @type {AnnotationTemplateControllerPostRequestFieldsInnerParameters}
     * @memberof AnnotationField
     */
    'parameters': AnnotationTemplateControllerPostRequestFieldsInnerParameters;
}
export declare const AnnotationFieldTypeEnum: {
    readonly Tag: "tag";
    readonly Sheet: "sheet";
    readonly User: "user";
};
export type AnnotationFieldTypeEnum = typeof AnnotationFieldTypeEnum[keyof typeof AnnotationFieldTypeEnum];