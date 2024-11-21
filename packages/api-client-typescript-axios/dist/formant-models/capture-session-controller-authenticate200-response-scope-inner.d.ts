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
 * @interface CaptureSessionControllerAuthenticate200ResponseScopeInner
 */
export interface CaptureSessionControllerAuthenticate200ResponseScopeInner {
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeRoles}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'roles'?: AuthControllerCreateServiceAccountRequestScopeRoles | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeUsers}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'users'?: AuthControllerCreateServiceAccountRequestScopeUsers | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeTeams}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'teams'?: AuthControllerCreateServiceAccountRequestScopeTeams | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeDevices}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'devices'?: AuthControllerCreateServiceAccountRequestScopeDevices | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeFleets}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'fleets'?: AuthControllerCreateServiceAccountRequestScopeFleets | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeEvents}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'events'?: AuthControllerCreateServiceAccountRequestScopeEvents | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeViews}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'views'?: AuthControllerCreateServiceAccountRequestScopeViews | null;
    /**
     *
     * @type {AuthControllerCreateServiceAccountRequestScopeKeyValue}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'keyValue'?: AuthControllerCreateServiceAccountRequestScopeKeyValue | null;
    /**
     *
     * @type {any}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'tags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'types'?: Array<CaptureSessionControllerAuthenticate200ResponseScopeInnerTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'agentIds'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'start'?: string;
    /**
     *
     * @type {string}
     * @memberof CaptureSessionControllerAuthenticate200ResponseScopeInner
     */
    'end'?: string;
}
export declare const CaptureSessionControllerAuthenticate200ResponseScopeInnerTypesEnum: {
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
export type CaptureSessionControllerAuthenticate200ResponseScopeInnerTypesEnum = typeof CaptureSessionControllerAuthenticate200ResponseScopeInnerTypesEnum[keyof typeof CaptureSessionControllerAuthenticate200ResponseScopeInnerTypesEnum];