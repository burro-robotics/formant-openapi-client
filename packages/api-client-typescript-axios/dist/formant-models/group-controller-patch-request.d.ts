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
 * @interface GroupControllerPatchRequest
 */
export interface GroupControllerPatchRequest {
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'name'?: string;
    /**
     *
     * @type {any}
     * @memberof GroupControllerPatchRequest
     */
    'tagKey'?: any;
    /**
     *
     * @type {any}
     * @memberof GroupControllerPatchRequest
     */
    'tagValue'?: any;
    /**
     *
     * @type {boolean}
     * @memberof GroupControllerPatchRequest
     */
    'active'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupControllerPatchRequest
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'color'?: string | null;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'parent'?: string | null;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupControllerPatchRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof GroupControllerPatchRequest
     */
    'tags'?: {
        [key: string]: string;
    };
}
