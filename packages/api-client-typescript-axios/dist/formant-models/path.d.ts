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
 * @interface Path
 */
export interface Path {
    /**
     *
     * @type {GoalWorldToLocal}
     * @memberof Path
     */
    'worldToLocal': GoalWorldToLocal;
    /**
     *
     * @type {Array<GoalWorldToLocal>}
     * @memberof Path
     */
    'poses': Array<GoalWorldToLocal>;
}
