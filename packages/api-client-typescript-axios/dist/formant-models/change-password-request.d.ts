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
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     * Enter your current Formant password.
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'currentPassword': string;
    /**
     * Enter your new Formant password.
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'newPassword': string;
    /**
     * Enter the refresh token you received when you logged in.
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    'refreshToken': string;
}