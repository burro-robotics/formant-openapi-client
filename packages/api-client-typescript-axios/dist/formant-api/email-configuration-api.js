"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfigurationApi = exports.EmailConfigurationApiFactory = exports.EmailConfigurationApiFp = exports.EmailConfigurationApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * EmailConfigurationApi - axios parameter creator
 * @export
 */
var EmailConfigurationApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Delete an email Configuration Resource: organization Authorized roles: administrator
         * @summary Delete
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerDelete: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('emailConfigurationControllerDelete', 'id', id);
                            localVarPath = "/email-configuration/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication bearerAuth required
                            // http bearer authentication required
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration)];
                        case 1:
                            // authentication bearerAuth required
                            // http bearer authentication required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Fetch an email configuration by id Resource: organization Authorized roles: administrator
         * @summary Get
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerGet: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('emailConfigurationControllerGet', 'id', id);
                            localVarPath = "/email-configuration/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication bearerAuth required
                            // http bearer authentication required
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration)];
                        case 1:
                            // authentication bearerAuth required
                            // http bearer authentication required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * List all email configurations for the organization Resource: organization Authorized roles: administrator
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerList: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/email-configuration";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication bearerAuth required
                            // http bearer authentication required
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration)];
                        case 1:
                            // authentication bearerAuth required
                            // http bearer authentication required
                            _a.sent();
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Update an email configuration Resource: organization Authorized roles: administrator
         * @summary Patch
         * @param {string} id
         * @param {EmailConfigurationControllerPatchRequest} emailConfigurationControllerPatchRequest PartialEmailConfiguration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPatch: function (id, emailConfigurationControllerPatchRequest, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('emailConfigurationControllerPatch', 'id', id);
                            // verify required parameter 'emailConfigurationControllerPatchRequest' is not null or undefined
                            (0, common_1.assertParamExists)('emailConfigurationControllerPatch', 'emailConfigurationControllerPatchRequest', emailConfigurationControllerPatchRequest);
                            localVarPath = "/email-configuration/{id}"
                                .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PATCH' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication bearerAuth required
                            // http bearer authentication required
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration)];
                        case 1:
                            // authentication bearerAuth required
                            // http bearer authentication required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(emailConfigurationControllerPatchRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Create a custom email configuration for the organization Resource: organization Authorized roles: administrator
         * @summary Post
         * @param {EmailConfigurationControllerList200ResponseItemsInner} emailConfigurationControllerList200ResponseItemsInner EmailConfiguration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPost: function (emailConfigurationControllerList200ResponseItemsInner, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'emailConfigurationControllerList200ResponseItemsInner' is not null or undefined
                            (0, common_1.assertParamExists)('emailConfigurationControllerPost', 'emailConfigurationControllerList200ResponseItemsInner', emailConfigurationControllerList200ResponseItemsInner);
                            localVarPath = "/email-configuration";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication bearerAuth required
                            // http bearer authentication required
                            return [4 /*yield*/, (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration)];
                        case 1:
                            // authentication bearerAuth required
                            // http bearer authentication required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(emailConfigurationControllerList200ResponseItemsInner, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
exports.EmailConfigurationApiAxiosParamCreator = EmailConfigurationApiAxiosParamCreator;
/**
 * EmailConfigurationApi - functional programming interface
 * @export
 */
var EmailConfigurationApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.EmailConfigurationApiAxiosParamCreator)(configuration);
    return {
        /**
         * Delete an email Configuration Resource: organization Authorized roles: administrator
         * @summary Delete
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerDelete: function (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.emailConfigurationControllerDelete(id, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EmailConfigurationApi.emailConfigurationControllerDelete']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Fetch an email configuration by id Resource: organization Authorized roles: administrator
         * @summary Get
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerGet: function (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.emailConfigurationControllerGet(id, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EmailConfigurationApi.emailConfigurationControllerGet']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * List all email configurations for the organization Resource: organization Authorized roles: administrator
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerList: function (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.emailConfigurationControllerList(options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EmailConfigurationApi.emailConfigurationControllerList']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Update an email configuration Resource: organization Authorized roles: administrator
         * @summary Patch
         * @param {string} id
         * @param {EmailConfigurationControllerPatchRequest} emailConfigurationControllerPatchRequest PartialEmailConfiguration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPatch: function (id, emailConfigurationControllerPatchRequest, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.emailConfigurationControllerPatch(id, emailConfigurationControllerPatchRequest, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EmailConfigurationApi.emailConfigurationControllerPatch']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Create a custom email configuration for the organization Resource: organization Authorized roles: administrator
         * @summary Post
         * @param {EmailConfigurationControllerList200ResponseItemsInner} emailConfigurationControllerList200ResponseItemsInner EmailConfiguration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPost: function (emailConfigurationControllerList200ResponseItemsInner, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.emailConfigurationControllerPost(emailConfigurationControllerList200ResponseItemsInner, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EmailConfigurationApi.emailConfigurationControllerPost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
    };
};
exports.EmailConfigurationApiFp = EmailConfigurationApiFp;
/**
 * EmailConfigurationApi - factory interface
 * @export
 */
var EmailConfigurationApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.EmailConfigurationApiFp)(configuration);
    return {
        /**
         * Delete an email Configuration Resource: organization Authorized roles: administrator
         * @summary Delete
         * @param {EmailConfigurationApiEmailConfigurationControllerDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerDelete: function (requestParameters, options) {
            return localVarFp.emailConfigurationControllerDelete(requestParameters.id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Fetch an email configuration by id Resource: organization Authorized roles: administrator
         * @summary Get
         * @param {EmailConfigurationApiEmailConfigurationControllerGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerGet: function (requestParameters, options) {
            return localVarFp.emailConfigurationControllerGet(requestParameters.id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * List all email configurations for the organization Resource: organization Authorized roles: administrator
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerList: function (options) {
            return localVarFp.emailConfigurationControllerList(options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Update an email configuration Resource: organization Authorized roles: administrator
         * @summary Patch
         * @param {EmailConfigurationApiEmailConfigurationControllerPatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPatch: function (requestParameters, options) {
            return localVarFp.emailConfigurationControllerPatch(requestParameters.id, requestParameters.emailConfigurationControllerPatchRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Create a custom email configuration for the organization Resource: organization Authorized roles: administrator
         * @summary Post
         * @param {EmailConfigurationApiEmailConfigurationControllerPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailConfigurationControllerPost: function (requestParameters, options) {
            return localVarFp.emailConfigurationControllerPost(requestParameters.emailConfigurationControllerList200ResponseItemsInner, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.EmailConfigurationApiFactory = EmailConfigurationApiFactory;
/**
 * EmailConfigurationApi - object-oriented interface
 * @export
 * @class EmailConfigurationApi
 * @extends {BaseAPI}
 */
var EmailConfigurationApi = /** @class */ (function (_super) {
    __extends(EmailConfigurationApi, _super);
    function EmailConfigurationApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Delete an email Configuration Resource: organization Authorized roles: administrator
     * @summary Delete
     * @param {EmailConfigurationApiEmailConfigurationControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailConfigurationApi
     */
    EmailConfigurationApi.prototype.emailConfigurationControllerDelete = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EmailConfigurationApiFp)(this.configuration).emailConfigurationControllerDelete(requestParameters.id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Fetch an email configuration by id Resource: organization Authorized roles: administrator
     * @summary Get
     * @param {EmailConfigurationApiEmailConfigurationControllerGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailConfigurationApi
     */
    EmailConfigurationApi.prototype.emailConfigurationControllerGet = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EmailConfigurationApiFp)(this.configuration).emailConfigurationControllerGet(requestParameters.id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * List all email configurations for the organization Resource: organization Authorized roles: administrator
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailConfigurationApi
     */
    EmailConfigurationApi.prototype.emailConfigurationControllerList = function (options) {
        var _this = this;
        return (0, exports.EmailConfigurationApiFp)(this.configuration).emailConfigurationControllerList(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Update an email configuration Resource: organization Authorized roles: administrator
     * @summary Patch
     * @param {EmailConfigurationApiEmailConfigurationControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailConfigurationApi
     */
    EmailConfigurationApi.prototype.emailConfigurationControllerPatch = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EmailConfigurationApiFp)(this.configuration).emailConfigurationControllerPatch(requestParameters.id, requestParameters.emailConfigurationControllerPatchRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Create a custom email configuration for the organization Resource: organization Authorized roles: administrator
     * @summary Post
     * @param {EmailConfigurationApiEmailConfigurationControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailConfigurationApi
     */
    EmailConfigurationApi.prototype.emailConfigurationControllerPost = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EmailConfigurationApiFp)(this.configuration).emailConfigurationControllerPost(requestParameters.emailConfigurationControllerList200ResponseItemsInner, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return EmailConfigurationApi;
}(base_1.BaseAPI));
exports.EmailConfigurationApi = EmailConfigurationApi;
