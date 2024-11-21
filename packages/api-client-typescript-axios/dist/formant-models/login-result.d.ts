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
import { AuthControllerLogin200ResponseAuthentication } from './auth-controller-login200-response-authentication';
import { AuthControllerLogin200ResponseChallenge } from './auth-controller-login200-response-challenge';
/**
 *
 * @export
 * @interface LoginResult
 */
export interface LoginResult {
    /**
     *
     * @type {AuthControllerLogin200ResponseAuthentication}
     * @memberof LoginResult
     */
    'authentication': AuthControllerLogin200ResponseAuthentication;
    /**
     *
     * @type {AuthControllerLogin200ResponseChallenge}
     * @memberof LoginResult
     */
    'challenge'?: AuthControllerLogin200ResponseChallenge;
    /**
     *
     * @type {boolean}
     * @memberof LoginResult
     */
    'isExistingUser'?: boolean;
}