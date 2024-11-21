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
import { DeviceConfigurationTemplateControllerPostRequestDocument } from './device-configuration-template-controller-post-request-document';
import { DeviceConfigurationTemplateControllerPostRequestDocumentRtcInfo } from './device-configuration-template-controller-post-request-document-rtc-info';
import { IntegrationControllerCreateHTTPIntegration200Response } from './integration-controller-create-httpintegration200-response';
import { OrganizationAwsInfo } from './organization-aws-info';
import { OrganizationBillingInfo } from './organization-billing-info';
import { OrganizationGoogleStorageInfo } from './organization-google-storage-info';
import { OrganizationOverviewSettings } from './organization-overview-settings';
import { OrganizationPagerdutyInfo } from './organization-pagerduty-info';
import { OrganizationSlackInfo } from './organization-slack-info';
import { OrganizationStripeInfo } from './organization-stripe-info';
import { OrganizationTeleopConfiguration } from './organization-teleop-configuration';
import { OrganizationTeleopHighPingReconnectBehaviors } from './organization-teleop-high-ping-reconnect-behaviors';
import { OrganizationWebhooksInfo } from './organization-webhooks-info';
/**
 *
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'plan': OrganizationPlanEnum;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'description'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'industry': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'website': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'addressLine1': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'addressLine2': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'city': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'state': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'postalCode': string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'country': string;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'enabled'?: boolean;
    /**
     *
     * @type {OrganizationPagerdutyInfo}
     * @memberof Organization
     */
    'pagerdutyInfo'?: OrganizationPagerdutyInfo;
    /**
     *
     * @type {OrganizationTeleopHighPingReconnectBehaviors}
     * @memberof Organization
     */
    'teleopHighPingReconnectBehaviors'?: OrganizationTeleopHighPingReconnectBehaviors;
    /**
     *
     * @type {OrganizationSlackInfo}
     * @memberof Organization
     */
    'slackInfo'?: OrganizationSlackInfo;
    /**
     *
     * @type {IntegrationControllerCreateHTTPIntegration200Response}
     * @memberof Organization
     */
    'googleInfo'?: IntegrationControllerCreateHTTPIntegration200Response;
    /**
     *
     * @type {OrganizationWebhooksInfo}
     * @memberof Organization
     */
    'webhooksInfo'?: OrganizationWebhooksInfo;
    /**
     *
     * @type {OrganizationAwsInfo}
     * @memberof Organization
     */
    'awsInfo'?: OrganizationAwsInfo;
    /**
     *
     * @type {OrganizationGoogleStorageInfo}
     * @memberof Organization
     */
    'googleStorageInfo'?: OrganizationGoogleStorageInfo;
    /**
     *
     * @type {OrganizationStripeInfo}
     * @memberof Organization
     */
    'stripeInfo'?: OrganizationStripeInfo;
    /**
     *
     * @type {DeviceConfigurationTemplateControllerPostRequestDocumentRtcInfo}
     * @memberof Organization
     */
    'rtcInfo'?: DeviceConfigurationTemplateControllerPostRequestDocumentRtcInfo;
    /**
     *
     * @type {OrganizationTeleopConfiguration}
     * @memberof Organization
     */
    'teleopConfiguration'?: OrganizationTeleopConfiguration;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'dataExportEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'advancedConfigurationEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'customerPortalEnabled'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'stripeBillingEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'stripeSubscriptionEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'missionPlanningEnabled'?: boolean;
    /**
     *
     * @type {OrganizationBillingInfo}
     * @memberof Organization
     */
    'billingInfo'?: OrganizationBillingInfo;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'addonBillingPeriod': OrganizationAddonBillingPeriodEnum;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'invoiceBillingPeriod': OrganizationInvoiceBillingPeriodEnum;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    's3ExportEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'blobDataEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'whiteLabelEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'viewer3dEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'adaptersEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'whiteLabelCSS'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'demoModeEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'teleopShareEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'billEstimateEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'dataRetentionEnabled'?: string | null;
    /**
     *
     * @type {number}
     * @memberof Organization
     */
    'daysDataRetained'?: number;
    /**
     *
     * @type {number}
     * @memberof Organization
     */
    'maxChunkRequestLimit'?: number;
    /**
     *
     * @type {number}
     * @memberof Organization
     */
    'onlineSensitivity'?: number;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'supportEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'supportTier'?: OrganizationSupportTierEnum;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'trialPeriodEnd': string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'externalId'?: string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'chargebeeId': string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'externalTwilioConfig': string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'totangoId': string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'hubspotId': string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customTos'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'teleopEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'observabilityEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'shareEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'annotationsEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'diagnosticsEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'sshEnabled'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'spotEnabled'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'fileStorageEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'roleViewerEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'teamsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'schedulesEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'betaUI'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'pagingEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'statefulEventsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'billingEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'smsFollowersEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'eventActionIntervalEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'taskSummariesEnabled'?: boolean;
    /**
     *
     * @type {DeviceConfigurationTemplateControllerPostRequestDocument}
     * @memberof Organization
     */
    'defaultDeviceConfig'?: DeviceConfigurationTemplateControllerPostRequestDocument;
    /**
     *
     * @type {number}
     * @memberof Organization
     */
    'defaultStreamThrottleHz'?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'outageBannerEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'newHeaderEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'explorationsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customerSuccessAIEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customAnalyticsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'fleetAnalyticsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'navigatorEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'listViewEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'mapViewEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'nodeGraphPageEnabled'?: boolean;
    /**
     *
     * @type {Set<string>}
     * @memberof Organization
     */
    'flags'?: Set<OrganizationFlagsEnum>;
    /**
     *
     * @type {OrganizationOverviewSettings}
     * @memberof Organization
     */
    'overviewSettings'?: OrganizationOverviewSettings;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'snowflakeWarehouseName': string | null;
    /**
     *
     * @type {Set<string>}
     * @memberof Organization
     */
    'supportedRegions'?: Set<OrganizationSupportedRegionsEnum>;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'enableSsoOidc'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'inactivityLogoutEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'smsOptInEnabled'?: boolean;
    /**
     *
     * @type {number}
     * @memberof Organization
     */
    'inactivityTimeout'?: number;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customEventTriggersEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'allowCustomEmailConfiguration'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'portalBaseUrl'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'ingestionEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'timescaleEnabled': string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'clickhouseEnabled': string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'clickhouseQueryEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'dropExperimentalQueryData'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'eventQueriesEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'snowflakeRowLevelSecurityEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'clickhouseAnalyticsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'cachedEventsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'userTagSettingsEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'bulkProvisioningEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'deviceConfigurationTemplatesEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'observabilityV1Enabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'analyticsV1Enabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customRolesEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'mixedModuleModeEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'googleStorageExportEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'customModulesEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'showGetStartedOnOverview'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof Organization
     */
    'sidebarHiddenSections'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'designFleetManagerWhiteListedUsers'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'designFleetManagerViewName'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'optionalHelpLink'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'teleopJoyEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'showOverviewFilters'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'localModeEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'embedViewEnabled'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Organization
     */
    'multiplePrimaryTeleopEnabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Organization
     */
    'updatedAt'?: string;
}
export declare const OrganizationPlanEnum: {
    readonly SelfServe: "self-serve";
    readonly Paid: "paid";
};
export type OrganizationPlanEnum = typeof OrganizationPlanEnum[keyof typeof OrganizationPlanEnum];
export declare const OrganizationAddonBillingPeriodEnum: {
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type OrganizationAddonBillingPeriodEnum = typeof OrganizationAddonBillingPeriodEnum[keyof typeof OrganizationAddonBillingPeriodEnum];
export declare const OrganizationInvoiceBillingPeriodEnum: {
    readonly Day: "day";
    readonly Month: "month";
    readonly Year: "year";
};
export type OrganizationInvoiceBillingPeriodEnum = typeof OrganizationInvoiceBillingPeriodEnum[keyof typeof OrganizationInvoiceBillingPeriodEnum];
export declare const OrganizationSupportTierEnum: {
    readonly Standard: "standard";
    readonly Enterprise: "enterprise";
};
export type OrganizationSupportTierEnum = typeof OrganizationSupportTierEnum[keyof typeof OrganizationSupportTierEnum];
export declare const OrganizationFlagsEnum: {
    readonly Role: "settings.role";
    readonly User: "settings.user";
    readonly Device: "settings.device";
    readonly Team: "settings.team";
    readonly Group: "settings.group";
    readonly ConfigTemplate: "settings.config_template";
    readonly Event: "settings.event";
    readonly View: "settings.view";
    readonly Command: "settings.command";
    readonly Schedule: "settings.schedule";
    readonly Annotation: "settings.annotation";
    readonly Share: "settings.share";
    readonly Stream: "settings.stream";
    readonly Tag: "settings.tag";
    readonly Integration: "settings.integration";
    readonly FileStorage: "settings.file_storage";
    readonly Adapter: "settings.adapter";
    readonly Module: "settings.module";
    readonly Organization: "settings.organization";
};
export type OrganizationFlagsEnum = typeof OrganizationFlagsEnum[keyof typeof OrganizationFlagsEnum];
export declare const OrganizationSupportedRegionsEnum: {
    readonly Amer: "AMER";
    readonly Emea: "EMEA";
    readonly Japac: "JAPAC";
};
export type OrganizationSupportedRegionsEnum = typeof OrganizationSupportedRegionsEnum[keyof typeof OrganizationSupportedRegionsEnum];