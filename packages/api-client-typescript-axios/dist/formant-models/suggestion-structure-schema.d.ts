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
import { SuggestionControllerCreateStructuredSuggestionRequestStructuresInnerParameters } from './suggestion-controller-create-structured-suggestion-request-structures-inner-parameters';
/**
 *
 * @export
 * @interface SuggestionStructureSchema
 */
export interface SuggestionStructureSchema {
    /**
     *
     * @type {string}
     * @memberof SuggestionStructureSchema
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof SuggestionStructureSchema
     */
    'description': string;
    /**
     *
     * @type {SuggestionControllerCreateStructuredSuggestionRequestStructuresInnerParameters}
     * @memberof SuggestionStructureSchema
     */
    'parameters': SuggestionControllerCreateStructuredSuggestionRequestStructuresInnerParameters;
}
