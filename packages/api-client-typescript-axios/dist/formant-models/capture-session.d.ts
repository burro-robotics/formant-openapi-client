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
 * @interface CaptureSession
 */
export interface CaptureSession {
    /**
     * ID of the organization to which you want to save this capture session.
     * @type {string}
     * @memberof CaptureSession
     */
    'organizationId'?: string;
    /**
     *
     * @type {string}
     * @memberof CaptureSession
     */
    'userId'?: string;
    /**
     * ID of the device with which you want to associate this capture session.
     * @type {string}
     * @memberof CaptureSession
     */
    'deviceId': string;
    /**
     *
     * @type {string}
     * @memberof CaptureSession
     */
    'code'?: string;
    /**
     * Date and time when the capture session link sent to your video device will expire.
     * @type {string}
     * @memberof CaptureSession
     */
    'expiration'?: string | null;
    /**
     * Name of the stream to which your video device will publish data.
     * @type {string}
     * @memberof CaptureSession
     */
    'streamName': string;
    /**
     *
     * @type {string}
     * @memberof CaptureSession
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof CaptureSession
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof CaptureSession
     */
    'updatedAt'?: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof CaptureSession
     */
    'tags'?: {
        [key: string]: string;
    };
}