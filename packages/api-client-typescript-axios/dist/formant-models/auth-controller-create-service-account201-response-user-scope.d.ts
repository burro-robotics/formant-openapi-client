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
import { AuthControllerCreateServiceAccountRequestScopeDevices } from './auth-controller-create-service-account-request-scope-devices';
import { AuthControllerCreateServiceAccountRequestScopeEvents } from './auth-controller-create-service-account-request-scope-events';
import { AuthControllerCreateServiceAccountRequestScopeFleets } from './auth-controller-create-service-account-request-scope-fleets';
import { AuthControllerCreateServiceAccountRequestScopeKeyValue } from './auth-controller-create-service-account-request-scope-key-value';
import { AuthControllerCreateServiceAccountRequestScopeRoles } from './auth-controller-create-service-account-request-scope-roles';
import { AuthControllerCreateServiceAccountRequestScopeTeams } from './auth-controller-create-service-account-request-scope-teams';
import { AuthControllerCreateServiceAccountRequestScopeUsers } from './auth-controller-create-service-account-request-scope-users';
import { AuthControllerCreateServiceAccountRequestScopeViews } from './auth-controller-create-service-account-request-scope-views';
/**
 *
 * @export
 * @interface AuthControllerCreateServiceAccount201ResponseUserScope
 */
export interface AuthControllerCreateServiceAccount201ResponseUserScope {
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeRoles}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'roles'?: AuthControllerCreateServiceAccountRequestScopeRoles | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeUsers}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'users'?: AuthControllerCreateServiceAccountRequestScopeUsers | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeTeams}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'teams'?: AuthControllerCreateServiceAccountRequestScopeTeams | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeDevices}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'devices'?: AuthControllerCreateServiceAccountRequestScopeDevices | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeFleets}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'fleets'?: AuthControllerCreateServiceAccountRequestScopeFleets | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeEvents}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'events'?: AuthControllerCreateServiceAccountRequestScopeEvents | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeViews}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'views'?: AuthControllerCreateServiceAccountRequestScopeViews | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeKeyValue}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'keyValue'?: AuthControllerCreateServiceAccountRequestScopeKeyValue | null;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'tags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'types'?: Array<AuthControllerCreateServiceAccount201ResponseUserScopeTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'agentIds'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'start'?: string;
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccount201ResponseUserScope
     */
    'end'?: string;
}
export declare const AuthControllerCreateServiceAccount201ResponseUserScopeTypesEnum: {
    readonly Bitset: "bitset";
    readonly Localization: "localization";
    readonly PointCloud: "point cloud";
    readonly Location: "location";
    readonly File: "file";
    readonly Health: "health";
    readonly TransformTree: "transform tree";
    readonly Battery: "battery";
    readonly Video: "video";
    readonly NumericSet: "numeric set";
    readonly Json: "json";
    readonly Image: "image";
    readonly Numeric: "numeric";
    readonly Text: "text";
};
export type AuthControllerCreateServiceAccount201ResponseUserScopeTypesEnum = typeof AuthControllerCreateServiceAccount201ResponseUserScopeTypesEnum[keyof typeof AuthControllerCreateServiceAccount201ResponseUserScopeTypesEnum];