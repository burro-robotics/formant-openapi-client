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
exports.EventTriggerGroupApi = exports.EventTriggerGroupApiFactory = exports.EventTriggerGroupApiFp = exports.EventTriggerGroupApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * EventTriggerGroupApi - axios parameter creator
 * @export
 */
var EventTriggerGroupApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * List all event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetAll: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/event-trigger-groups";
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
         * Get an event trigger group Resource: events Authorized roles: viewer, device
         * @summary Get one
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetOne: function (id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('eventTriggerGroupControllerGetOne', 'id', id);
                            localVarPath = "/event-trigger-groups/{id}"
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
         * Update event trigger group Resource: events Authorized roles: administrator
         * @summary Patch
         * @param {string} id
         * @param {EventTriggerGroupControllerPatchRequest} eventTriggerGroupControllerPatchRequest PartialEventTriggerGroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPatch: function (id, eventTriggerGroupControllerPatchRequest, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'id' is not null or undefined
                            (0, common_1.assertParamExists)('eventTriggerGroupControllerPatch', 'id', id);
                            // verify required parameter 'eventTriggerGroupControllerPatchRequest' is not null or undefined
                            (0, common_1.assertParamExists)('eventTriggerGroupControllerPatch', 'eventTriggerGroupControllerPatchRequest', eventTriggerGroupControllerPatchRequest);
                            localVarPath = "/event-trigger-groups/{id}"
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(eventTriggerGroupControllerPatchRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Create event trigger group Resource: events Authorized roles: administrator
         * @summary Post
         * @param {EventTriggerGroupControllerPostRequest} eventTriggerGroupControllerPostRequest CreateEventTriggerGroupRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPost: function (eventTriggerGroupControllerPostRequest, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'eventTriggerGroupControllerPostRequest' is not null or undefined
                            (0, common_1.assertParamExists)('eventTriggerGroupControllerPost', 'eventTriggerGroupControllerPostRequest', eventTriggerGroupControllerPostRequest);
                            localVarPath = "/event-trigger-groups";
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(eventTriggerGroupControllerPostRequest, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: (0, common_1.toPathString)(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Query event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Query
         * @param {any} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerQuery: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'body' is not null or undefined
                            (0, common_1.assertParamExists)('eventTriggerGroupControllerQuery', 'body', body);
                            localVarPath = "/event-trigger-groups/query";
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
                            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(body, localVarRequestOptions, configuration);
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
exports.EventTriggerGroupApiAxiosParamCreator = EventTriggerGroupApiAxiosParamCreator;
/**
 * EventTriggerGroupApi - functional programming interface
 * @export
 */
var EventTriggerGroupApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.EventTriggerGroupApiAxiosParamCreator)(configuration);
    return {
        /**
         * List all event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetAll: function (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.eventTriggerGroupControllerGetAll(options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EventTriggerGroupApi.eventTriggerGroupControllerGetAll']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Get an event trigger group Resource: events Authorized roles: viewer, device
         * @summary Get one
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetOne: function (id, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.eventTriggerGroupControllerGetOne(id, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EventTriggerGroupApi.eventTriggerGroupControllerGetOne']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Update event trigger group Resource: events Authorized roles: administrator
         * @summary Patch
         * @param {string} id
         * @param {EventTriggerGroupControllerPatchRequest} eventTriggerGroupControllerPatchRequest PartialEventTriggerGroup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPatch: function (id, eventTriggerGroupControllerPatchRequest, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.eventTriggerGroupControllerPatch(id, eventTriggerGroupControllerPatchRequest, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EventTriggerGroupApi.eventTriggerGroupControllerPatch']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Create event trigger group Resource: events Authorized roles: administrator
         * @summary Post
         * @param {EventTriggerGroupControllerPostRequest} eventTriggerGroupControllerPostRequest CreateEventTriggerGroupRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPost: function (eventTriggerGroupControllerPostRequest, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.eventTriggerGroupControllerPost(eventTriggerGroupControllerPostRequest, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EventTriggerGroupApi.eventTriggerGroupControllerPost']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Query event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Query
         * @param {any} body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerQuery: function (body, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.eventTriggerGroupControllerQuery(body, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['EventTriggerGroupApi.eventTriggerGroupControllerQuery']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
    };
};
exports.EventTriggerGroupApiFp = EventTriggerGroupApiFp;
/**
 * EventTriggerGroupApi - factory interface
 * @export
 */
var EventTriggerGroupApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.EventTriggerGroupApiFp)(configuration);
    return {
        /**
         * List all event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetAll: function (options) {
            return localVarFp.eventTriggerGroupControllerGetAll(options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get an event trigger group Resource: events Authorized roles: viewer, device
         * @summary Get one
         * @param {EventTriggerGroupApiEventTriggerGroupControllerGetOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerGetOne: function (requestParameters, options) {
            return localVarFp.eventTriggerGroupControllerGetOne(requestParameters.id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Update event trigger group Resource: events Authorized roles: administrator
         * @summary Patch
         * @param {EventTriggerGroupApiEventTriggerGroupControllerPatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPatch: function (requestParameters, options) {
            return localVarFp.eventTriggerGroupControllerPatch(requestParameters.id, requestParameters.eventTriggerGroupControllerPatchRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Create event trigger group Resource: events Authorized roles: administrator
         * @summary Post
         * @param {EventTriggerGroupApiEventTriggerGroupControllerPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerPost: function (requestParameters, options) {
            return localVarFp.eventTriggerGroupControllerPost(requestParameters.eventTriggerGroupControllerPostRequest, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Query event trigger groups Resource: events Authorized roles: viewer, device
         * @summary Query
         * @param {EventTriggerGroupApiEventTriggerGroupControllerQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventTriggerGroupControllerQuery: function (requestParameters, options) {
            return localVarFp.eventTriggerGroupControllerQuery(requestParameters.body, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.EventTriggerGroupApiFactory = EventTriggerGroupApiFactory;
/**
 * EventTriggerGroupApi - object-oriented interface
 * @export
 * @class EventTriggerGroupApi
 * @extends {BaseAPI}
 */
var EventTriggerGroupApi = /** @class */ (function (_super) {
    __extends(EventTriggerGroupApi, _super);
    function EventTriggerGroupApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * List all event trigger groups Resource: events Authorized roles: viewer, device
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTriggerGroupApi
     */
    EventTriggerGroupApi.prototype.eventTriggerGroupControllerGetAll = function (options) {
        var _this = this;
        return (0, exports.EventTriggerGroupApiFp)(this.configuration).eventTriggerGroupControllerGetAll(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get an event trigger group Resource: events Authorized roles: viewer, device
     * @summary Get one
     * @param {EventTriggerGroupApiEventTriggerGroupControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTriggerGroupApi
     */
    EventTriggerGroupApi.prototype.eventTriggerGroupControllerGetOne = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EventTriggerGroupApiFp)(this.configuration).eventTriggerGroupControllerGetOne(requestParameters.id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Update event trigger group Resource: events Authorized roles: administrator
     * @summary Patch
     * @param {EventTriggerGroupApiEventTriggerGroupControllerPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTriggerGroupApi
     */
    EventTriggerGroupApi.prototype.eventTriggerGroupControllerPatch = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EventTriggerGroupApiFp)(this.configuration).eventTriggerGroupControllerPatch(requestParameters.id, requestParameters.eventTriggerGroupControllerPatchRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Create event trigger group Resource: events Authorized roles: administrator
     * @summary Post
     * @param {EventTriggerGroupApiEventTriggerGroupControllerPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTriggerGroupApi
     */
    EventTriggerGroupApi.prototype.eventTriggerGroupControllerPost = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EventTriggerGroupApiFp)(this.configuration).eventTriggerGroupControllerPost(requestParameters.eventTriggerGroupControllerPostRequest, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Query event trigger groups Resource: events Authorized roles: viewer, device
     * @summary Query
     * @param {EventTriggerGroupApiEventTriggerGroupControllerQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTriggerGroupApi
     */
    EventTriggerGroupApi.prototype.eventTriggerGroupControllerQuery = function (requestParameters, options) {
        var _this = this;
        return (0, exports.EventTriggerGroupApiFp)(this.configuration).eventTriggerGroupControllerQuery(requestParameters.body, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return EventTriggerGroupApi;
}(base_1.BaseAPI));
exports.EventTriggerGroupApi = EventTriggerGroupApi;