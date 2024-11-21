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
import { AnnotationTemplateControllerInspectSpreadsheet200ResponseInspectionParseResult } from './annotation-template-controller-inspect-spreadsheet200-response-inspection-parse-result';
/**
 *
 * @export
 * @interface GoogleSpreadsheetInspection
 */
export interface GoogleSpreadsheetInspection {
    /**
     *
     * @type {boolean}
     * @memberof GoogleSpreadsheetInspection
     */
    'parseUrlFailed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GoogleSpreadsheetInspection
     */
    'spreadsheetGetFailed'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GoogleSpreadsheetInspection
     */
    'sheetFindFailed'?: boolean;
    /**
     *
     * @type {string}
     * @memberof GoogleSpreadsheetInspection
     */
    'sheetTitle'?: string;
    /**
     *
     * @type {AnnotationTemplateControllerInspectSpreadsheet200ResponseInspectionParseResult}
     * @memberof GoogleSpreadsheetInspection
     */
    'parseResult'?: AnnotationTemplateControllerInspectSpreadsheet200ResponseInspectionParseResult;
}
