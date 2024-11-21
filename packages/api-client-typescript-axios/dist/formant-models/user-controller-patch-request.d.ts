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
import { AuthControllerCreateServiceAccount201ResponseUserScope } from './auth-controller-create-service-account201-response-user-scope';
/**
 *
 * @export
 * @interface UserControllerPatchRequest
 */
export interface UserControllerPatchRequest {
    /**
     * ID of the organization to which this user belongs.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     * ID of the account to which this user belongs.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'accountId'?: string | null;
    /**
     * ID of this user\'s role.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'roleId'?: string | null;
    /**
     * Email address of this user.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'email'?: string;
    /**
     * Ignore this - for internal use only.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'externalUserId'?: string | null;
    /**
     * First name of this user.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'firstName'?: string;
    /**
     * Last name of this user.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'lastName'?: string;
    /**
     *
     * @type {AuthControllerCreateServiceAccount201ResponseUserScope}
     * @memberof UserControllerPatchRequest
     */
    'scope'?: AuthControllerCreateServiceAccount201ResponseUserScope | null;
    /**
     * ID of the team to which this user belongs.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'teamId'?: string | null;
    /**
     * User\'s phone number (e.g., +14155550100).
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'phoneNumber'?: string;
    /**
     * Enable or disable this user. Set this to False to delete this user.
     * @type {boolean}
     * @memberof UserControllerPatchRequest
     */
    'enabled'?: boolean;
    /**
     * Should this user have organization owner privileges?
     * @type {boolean}
     * @memberof UserControllerPatchRequest
     */
    'isOrganizationOwner'?: boolean;
    /**
     * Has this user accepted Formant terms and conditions?
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'termsAccepted'?: string;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'lastLoggedIn'?: string;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'passwordHash'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof UserControllerPatchRequest
     */
    'isSingleSignOn'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'smsOptInStatus'?: UserControllerPatchRequestSmsOptInStatusEnum | null;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'region'?: UserControllerPatchRequestRegionEnum;
    /**
     *
     * @type {boolean}
     * @memberof UserControllerPatchRequest
     */
    'isServiceAccount'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserControllerPatchRequest
     */
    'allowCustomEmailConfiguration'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'jobTitle'?: string;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'language'?: UserControllerPatchRequestLanguageEnum;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'units'?: UserControllerPatchRequestUnitsEnum;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'timezone'?: string;
    /**
     * Title for the user.
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'title'?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof UserControllerPatchRequest
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof UserControllerPatchRequest
     */
    'tags'?: {
        [key: string]: string;
    };
}
export declare const UserControllerPatchRequestSmsOptInStatusEnum: {
    readonly In: "OPT_IN";
    readonly Out: "OPT_OUT";
};
export type UserControllerPatchRequestSmsOptInStatusEnum = typeof UserControllerPatchRequestSmsOptInStatusEnum[keyof typeof UserControllerPatchRequestSmsOptInStatusEnum];
export declare const UserControllerPatchRequestRegionEnum: {
    readonly Amer: "AMER";
    readonly Emea: "EMEA";
    readonly Japac: "JAPAC";
};
export type UserControllerPatchRequestRegionEnum = typeof UserControllerPatchRequestRegionEnum[keyof typeof UserControllerPatchRequestRegionEnum];
export declare const UserControllerPatchRequestLanguageEnum: {
    readonly EnUs: "en-US";
    readonly FrCa: "fr-CA";
};
export type UserControllerPatchRequestLanguageEnum = typeof UserControllerPatchRequestLanguageEnum[keyof typeof UserControllerPatchRequestLanguageEnum];
export declare const UserControllerPatchRequestUnitsEnum: {
    readonly Metric: "metric";
    readonly Imperial: "imperial";
};
export type UserControllerPatchRequestUnitsEnum = typeof UserControllerPatchRequestUnitsEnum[keyof typeof UserControllerPatchRequestUnitsEnum];
