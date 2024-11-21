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
 * Teams to which a user with this scope has access.
 * @export
 * @interface AuthControllerCreateServiceAccountRequestScopeTeams
 */
export interface AuthControllerCreateServiceAccountRequestScopeTeams {
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'start'?: string;
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'end'?: string;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'tags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'types'?: Array<AuthControllerCreateServiceAccountRequestScopeTeamsTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeTeams
     */
    'agentIds'?: Array<string>;
}
export declare const AuthControllerCreateServiceAccountRequestScopeTeamsTypesEnum: {
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
export type AuthControllerCreateServiceAccountRequestScopeTeamsTypesEnum = typeof AuthControllerCreateServiceAccountRequestScopeTeamsTypesEnum[keyof typeof AuthControllerCreateServiceAccountRequestScopeTeamsTypesEnum];
