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
import { CommandControllerPostRequestParameter } from './command-controller-post-request-parameter';
/**
 *
 * @export
 * @interface PartialCommand
 */
export interface PartialCommand {
    /**
     * ID of the organization in which you want to create this new command instance.
     * @type {string}
     * @memberof PartialCommand
     */
    'organizationId'?: string;
    /**
     * ID of the device on which this command should run.
     * @type {string}
     * @memberof PartialCommand
     */
    'deviceId'?: string;
    /**
     * ID of the user who issued this command.
     * @type {string}
     * @memberof PartialCommand
     */
    'userId'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PartialCommand
     */
    'commandTemplateId'?: string | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'eventTriggerId'?: string;
    /**
     * Function, script, or routine to execute.
     * @type {string}
     * @memberof PartialCommand
     */
    'command'?: string;
    /**
     *
     * @type {CommandControllerPostRequestParameter}
     * @memberof PartialCommand
     */
    'parameter'?: CommandControllerPostRequestParameter;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'deliveredAt'?: string | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'canceledAt'?: string | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'respondedAt'?: string | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {boolean}
     * @memberof PartialCommand
     */
    'success'?: boolean | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'streamName'?: string | null;
    /**
     * Used by Formant agent only, ignore.
     * @type {string}
     * @memberof PartialCommand
     */
    'streamType'?: PartialCommandStreamTypeEnum | null;
    /**
     * Tags associated with this command instance.
     * @type {{ [key: string]: string; }}
     * @memberof PartialCommand
     */
    'tags'?: {
        [key: string]: string;
    } | null;
    /**
     *
     * @type {string}
     * @memberof PartialCommand
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialCommand
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof PartialCommand
     */
    'updatedAt'?: string;
}
export declare const PartialCommandStreamTypeEnum: {
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
export type PartialCommandStreamTypeEnum = typeof PartialCommandStreamTypeEnum[keyof typeof PartialCommandStreamTypeEnum];