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
import { AwsInfoS3Export } from './aws-info-s3-export';
/**
 *
 * @export
 * @interface GoogleStorageInfo
 */
export interface GoogleStorageInfo {
    /**
     *
     * @type {string}
     * @memberof GoogleStorageInfo
     */
    'credentialsJsonKey': string;
    /**
     *
     * @type {AwsInfoS3Export}
     * @memberof GoogleStorageInfo
     */
    'googleStorageExport'?: AwsInfoS3Export;
    /**
     *
     * @type {string}
     * @memberof GoogleStorageInfo
     */
    'outputFormat'?: GoogleStorageInfoOutputFormatEnum;
}
export declare const GoogleStorageInfoOutputFormatEnum: {
    readonly Jsonl: "jsonl";
    readonly Parquet: "parquet";
};
export type GoogleStorageInfoOutputFormatEnum = typeof GoogleStorageInfoOutputFormatEnum[keyof typeof GoogleStorageInfoOutputFormatEnum];