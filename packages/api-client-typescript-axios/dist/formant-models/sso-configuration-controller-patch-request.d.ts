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
import { SsoConfigurationControllerList200ResponseItemsInnerSsoGroupNameToTeamMappingsInner } from './sso-configuration-controller-list200-response-items-inner-sso-group-name-to-team-mappings-inner';
/**
 *
 * @export
 * @interface SsoConfigurationControllerPatchRequest
 */
export interface SsoConfigurationControllerPatchRequest {
    /**
     * ID of the organization to which to apply this SSO configuration.
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'domain'?: string;
    /**
     * Default role assigned to all new users who sign up via SSO. Either a default team or a default role is required.
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'defaultRoleId'?: string;
    /**
     * Default team to which all new users who sign up via SSO will be assigned. Either a default team or a default role is required.
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'defaultTeamId'?: string;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'defaultAccountId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'authenticationFlow'?: SsoConfigurationControllerPatchRequestAuthenticationFlowEnum;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'clientId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'issuer'?: string | null;
    /**
     *
     * @type {Array<SsoConfigurationControllerList200ResponseItemsInnerSsoGroupNameToTeamMappingsInner>}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'ssoGroupNameToTeamMappings'?: Array<SsoConfigurationControllerList200ResponseItemsInnerSsoGroupNameToTeamMappingsInner>;
    /**
     *
     * @type {boolean}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'enabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'allowPasswordLogin'?: boolean;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof SsoConfigurationControllerPatchRequest
     */
    'updatedAt'?: string;
}
export declare const SsoConfigurationControllerPatchRequestAuthenticationFlowEnum: {
    readonly Oidc: "oidc";
    readonly Google: "google";
};
export type SsoConfigurationControllerPatchRequestAuthenticationFlowEnum = typeof SsoConfigurationControllerPatchRequestAuthenticationFlowEnum[keyof typeof SsoConfigurationControllerPatchRequestAuthenticationFlowEnum];