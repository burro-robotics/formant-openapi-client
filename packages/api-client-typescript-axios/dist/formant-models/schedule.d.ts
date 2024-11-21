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
 * @interface Schedule
 */
export interface Schedule {
    /**
     * ID of the organization to which you want to add this new schedule.
     * @type {string}
     * @memberof Schedule
     */
    'organizationId'?: string;
    /**
     * Name of this schedule.
     * @type {string}
     * @memberof Schedule
     */
    'name': string;
    /**
     * User-friendly description of this command schedule.
     * @type {string}
     * @memberof Schedule
     */
    'description': string;
    /**
     * Enter `command`.
     * @type {string}
     * @memberof Schedule
     */
    'type': ScheduleTypeEnum;
    /**
     * Timestamp at which this command should execute. Must be in the future. Format: `YYYY-MM-DDTHH:MM:SS`
     * @type {string}
     * @memberof Schedule
     */
    'at': string | null;
    /**
     * Frequency of this command schedule, as defined at https://crontab.guru
     * @type {string}
     * @memberof Schedule
     */
    'cron': string | null;
    /**
     * Enter `0` for this parameter.
     * @type {number}
     * @memberof Schedule
     */
    'durationMs': number;
    /**
     * Timezone which corresponds to the timestamp provided in the `at` parameter, in `tz database` format.
     * @type {string}
     * @memberof Schedule
     */
    'timezone': string;
    /**
     *
     * @type {any}
     * @memberof Schedule
     */
    'displayTimezone'?: any | null;
    /**
     * You must create a command template before you can schedule this command.
     * @type {string}
     * @memberof Schedule
     */
    'commandTemplateId': string | null;
    /**
     *
     * @type {string}
     * @memberof Schedule
     */
    'workflowId'?: string | null;
    /**
     * Value of the command parameter to be sent with this scheduled command.
     * @type {string}
     * @memberof Schedule
     */
    'parameterValue': string | null;
    /**
     * ID of the device to which to send this command.
     * @type {string}
     * @memberof Schedule
     */
    'deviceId': string;
    /**
     * Internal use only, ignore.
     * @type {string}
     * @memberof Schedule
     */
    'status'?: string;
    /**
     *
     * @type {string}
     * @memberof Schedule
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Schedule
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Schedule
     */
    'updatedAt'?: string;
}
export declare const ScheduleTypeEnum: {
    readonly Command: "command";
    readonly RunWorkflow: "run-workflow";
    readonly GenerateInsights: "generate-insights";
};
export type ScheduleTypeEnum = typeof ScheduleTypeEnum[keyof typeof ScheduleTypeEnum];
