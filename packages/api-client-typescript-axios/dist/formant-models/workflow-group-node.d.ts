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
 * @interface WorkflowGroupNode
 */
export interface WorkflowGroupNode {
    /**
     *
     * @type {string}
     * @memberof WorkflowGroupNode
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowGroupNode
     */
    'name': string;
    /**
     *
     * @type {any}
     * @memberof WorkflowGroupNode
     */
    'groupNode': any;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowGroupNode
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     *
     * @type {string}
     * @memberof WorkflowGroupNode
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowGroupNode
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof WorkflowGroupNode
     */
    'updatedAt'?: string;
}
