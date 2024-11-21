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
import { GoalWorldToLocal } from './goal-world-to-local';
/**
 *
 * @export
 * @interface LocalizationMap
 */
export interface LocalizationMap {
    /**
     *
     * @type {string}
     * @memberof LocalizationMap
     */
    'url': string;
    /**
     *
     * @type {number}
     * @memberof LocalizationMap
     */
    'size'?: number;
    /**
     *
     * @type {number}
     * @memberof LocalizationMap
     */
    'width': number;
    /**
     *
     * @type {number}
     * @memberof LocalizationMap
     */
    'height': number;
    /**
     *
     * @type {number}
     * @memberof LocalizationMap
     */
    'resolution': number;
    /**
     *
     * @type {GoalWorldToLocal}
     * @memberof LocalizationMap
     */
    'origin': GoalWorldToLocal;
    /**
     *
     * @type {GoalWorldToLocal}
     * @memberof LocalizationMap
     */
    'worldToLocal': GoalWorldToLocal;
}
