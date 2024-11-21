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
 * @interface Team
 */
export interface Team {
    /**
     * ID of the organization to which this team belongs.
     * @type {string}
     * @memberof Team
     */
    'organizationId'?: string;
    /**
     * Name of this team.
     * @type {string}
     * @memberof Team
     */
    'name': string;
    /**
     * ID of the role which will be assigned to all members of this team.
     * @type {string}
     * @memberof Team
     */
    'roleId': string;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScope}
     * @memberof Team
     */
    'scope'?: AuthControllerCreateServiceAccountRequestScope | null;
    /**
     *
     * @type {string}
     * @memberof Team
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Team
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Team
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof Team
     */
    'tags'?: {
        [key: string]: string;
    };
}
