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
 * @interface ConfirmForgotPasswordRequest
 */
export interface ConfirmForgotPasswordRequest {
    /**
     * Email address for which you want to update the password.
     * @type {string}
     * @memberof ConfirmForgotPasswordRequest
     */
    'email': string;
    /**
     * Confirmation code you received in your \'forgot password?\' email.
     * @type {string}
     * @memberof ConfirmForgotPasswordRequest
     */
    'confirmationCode': string;
    /**
     * New password you want to set.
     * @type {string}
     * @memberof ConfirmForgotPasswordRequest
     */
    'newPassword': string;
}