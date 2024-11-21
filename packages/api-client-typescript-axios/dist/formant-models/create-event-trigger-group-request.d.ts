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
 * @interface CreateEventTriggerGroupRequest
 */
export interface CreateEventTriggerGroupRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof CreateEventTriggerGroupRequest
     */
    'phoneNumbers': Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof CreateEventTriggerGroupRequest
     */
    'deviceIds': Array<string>;
    /**
     *
     * @type {Array<any>}
     * @memberof CreateEventTriggerGroupRequest
     */
    'eventTriggers': Array<any>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof CreateEventTriggerGroupRequest
     */
    'tags'?: {
        [key: string]: string;
    };
    /**
     *
     * @type {boolean}
     * @memberof CreateEventTriggerGroupRequest
     */
    'isAlreadyOptedIn'?: boolean;
}