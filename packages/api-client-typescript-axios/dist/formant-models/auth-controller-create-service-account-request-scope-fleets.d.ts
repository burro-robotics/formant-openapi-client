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
 * Fleets to which a user with this scope has access.
 * @export
 * @interface AuthControllerCreateServiceAccountRequestScopeFleets
 */
export interface AuthControllerCreateServiceAccountRequestScopeFleets {
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'start'?: string;
    /**
     *
     * @type {string}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'end'?: string;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'tags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'deviceIds'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'names'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'types'?: Array<AuthControllerCreateServiceAccountRequestScopeFleetsTypesEnum>;
    /**
     *
     * @type {any}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'notTags'?: any;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'notNames'?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof AuthControllerCreateServiceAccountRequestScopeFleets
     */
    'agentIds'?: Array<string>;
}
export declare const AuthControllerCreateServiceAccountRequestScopeFleetsTypesEnum: {
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
export type AuthControllerCreateServiceAccountRequestScopeFleetsTypesEnum = typeof AuthControllerCreateServiceAccountRequestScopeFleetsTypesEnum[keyof typeof AuthControllerCreateServiceAccountRequestScopeFleetsTypesEnum];
