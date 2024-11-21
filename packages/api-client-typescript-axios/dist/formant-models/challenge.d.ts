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
 * @interface Challenge
 */
export interface Challenge {
    /**
     *
     * @type {string}
     * @memberof Challenge
     */
    'type': ChallengeTypeEnum;
    /**
     *
     * @type {string}
     * @memberof Challenge
     */
    'session': string;
    /**
     *
     * @type {string}
     * @memberof Challenge
     */
    'userId': string;
    /**
     *
     * @type {string}
     * @memberof Challenge
     */
    'email': string;
}
export declare const ChallengeTypeEnum: {
    readonly NewPasswordRequired: "new-password-required";
};
export type ChallengeTypeEnum = typeof ChallengeTypeEnum[keyof typeof ChallengeTypeEnum];