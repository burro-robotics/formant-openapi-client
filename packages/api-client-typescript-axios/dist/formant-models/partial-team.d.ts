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
import { AuthControllerCreateServiceAccountRequestScope } from './auth-controller-create-service-account-request-scope';
/**
 *
 * @export
 * @interface PartialTeam
 */
export interface PartialTeam {
    /**
     * ID of the organization to which this team belongs.
     * @type {string}
     * @memberof PartialTeam
     */
    'organizationId'?: string;
    /**
     * Name of this team.
     * @type {string}
     * @memberof PartialTeam
     */
    'name'?: string;
    /**
     * ID of the role which will be assigned to all members of this team.
     * @type {string}
     * @memberof PartialTeam
     */
    'roleId'?: string;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScope}
     * @memberof PartialTeam
     */
    'scope'?: AuthControllerCreateServiceAccountRequestScope | null;
    /**
     *
     * @type {string}
     * @memberof PartialTeam
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialTeam
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialTeam
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof PartialTeam
     */
    'tags'?: {
        [key: string]: string;
    };
}