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
 * @interface AuthControllerLogin200ResponseChallenge
 */
export interface AuthControllerLogin200ResponseChallenge {
    /**
     *
     * @type {string}
     * @memberof AuthControllerLogin200ResponseChallenge
     */
    'type': AuthControllerLogin200ResponseChallengeTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AuthControllerLogin200ResponseChallenge
     */
    'session': string;
    /**
     *
     * @type {string}
     * @memberof AuthControllerLogin200ResponseChallenge
     */
    'userId': string;
    /**
     *
     * @type {string}
     * @memberof AuthControllerLogin200ResponseChallenge
     */
    'email': string;
}
export declare const AuthControllerLogin200ResponseChallengeTypeEnum: {
    readonly NewPasswordRequired: "new-password-required";
};
export type AuthControllerLogin200ResponseChallengeTypeEnum = typeof AuthControllerLogin200ResponseChallengeTypeEnum[keyof typeof AuthControllerLogin200ResponseChallengeTypeEnum];
