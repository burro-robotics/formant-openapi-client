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
 * @interface WorkflowControllerPostNodeRequest
 */
export interface WorkflowControllerPostNodeRequest {
    /**
     *
     * @type {string}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'name': string;
    /**
     *
     * @type {any}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'groupNode': any;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     *
     * @type {string}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowControllerPostNodeRequest
     */
    'updatedAt'?: string;
}
