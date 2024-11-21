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
exports.ShareApi = exports.ShareApiFactory = exports.ShareApiFp = exports.ShareApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * ShareApi - axios parameter creator
 * @export
 */
var ShareApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @summary Authenticate
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerAuthenticate: function (code, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'code' is not null or undefined
                    (0, common_1.assertParamExists)('shareControllerAuthenticate', 'code', code);
                    localVarPath = "/shares/{code}/authenticate"
                        .replace("{".concat("code", "}"), encodeURIComponent(String(code)));
                    localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: (0, common_1.toPathString)(localVarUrlObj),
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         * Revoke a share Resource: share Authorized roles: operator
         * @summary Delete
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerDelete: function (code, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            (0, common_1.assertParamExists)('shareControllerDelete', 'code', code);
                            localVarPath = "/shares/{code}"
                                .replace("{".concat("code", "}"), encodeURIComponent(String(code)));
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
         * List shares Resource: share Authorized roles: operator
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetAll: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/shares";
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
         * Get a share
         * @summary Get one
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetOne: function (code, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'code' is not null or undefined
                    (0, common_1.assertParamExists)('shareControllerGetOne', 'code', code);
                    localVarPath = "/shares/{code}"
                        .replace("{".concat("code", "}"), encodeURIComponent(String(code)));
                    localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: (0, common_1.toPathString)(localVarUrlObj),
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
exports.ShareApiAxiosParamCreator = ShareApiAxiosParamCreator;
/**
 * ShareApi - functional programming interface
 * @export
 */
var ShareApiFp = function (configuration) {
    var localVarAxiosParamCreator = (0, exports.ShareApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Authenticate
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerAuthenticate: function (code, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.shareControllerAuthenticate(code, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['ShareApi.shareControllerAuthenticate']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Revoke a share Resource: share Authorized roles: operator
         * @summary Delete
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerDelete: function (code, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.shareControllerDelete(code, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['ShareApi.shareControllerDelete']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * List shares Resource: share Authorized roles: operator
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetAll: function (options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.shareControllerGetAll(options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['ShareApi.shareControllerGetAll']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
        /**
         * Get a share
         * @summary Get one
         * @param {string} code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetOne: function (code, options) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs, localVarOperationServerIndex, localVarOperationServerBasePath;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.shareControllerGetOne(code, options)];
                        case 1:
                            localVarAxiosArgs = _d.sent();
                            localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                            localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['ShareApi.shareControllerGetOne']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                            return [2 /*return*/, function (axios, basePath) { return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath); }];
                    }
                });
            });
        },
    };
};
exports.ShareApiFp = ShareApiFp;
/**
 * ShareApi - factory interface
 * @export
 */
var ShareApiFactory = function (configuration, basePath, axios) {
    var localVarFp = (0, exports.ShareApiFp)(configuration);
    return {
        /**
         *
         * @summary Authenticate
         * @param {ShareApiShareControllerAuthenticateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerAuthenticate: function (requestParameters, options) {
            return localVarFp.shareControllerAuthenticate(requestParameters.code, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Revoke a share Resource: share Authorized roles: operator
         * @summary Delete
         * @param {ShareApiShareControllerDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerDelete: function (requestParameters, options) {
            return localVarFp.shareControllerDelete(requestParameters.code, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * List shares Resource: share Authorized roles: operator
         * @summary Get all
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetAll: function (options) {
            return localVarFp.shareControllerGetAll(options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get a share
         * @summary Get one
         * @param {ShareApiShareControllerGetOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        shareControllerGetOne: function (requestParameters, options) {
            return localVarFp.shareControllerGetOne(requestParameters.code, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
exports.ShareApiFactory = ShareApiFactory;
/**
 * ShareApi - object-oriented interface
 * @export
 * @class ShareApi
 * @extends {BaseAPI}
 */
var ShareApi = /** @class */ (function (_super) {
    __extends(ShareApi, _super);
    function ShareApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @summary Authenticate
     * @param {ShareApiShareControllerAuthenticateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShareApi
     */
    ShareApi.prototype.shareControllerAuthenticate = function (requestParameters, options) {
        var _this = this;
        return (0, exports.ShareApiFp)(this.configuration).shareControllerAuthenticate(requestParameters.code, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Revoke a share Resource: share Authorized roles: operator
     * @summary Delete
     * @param {ShareApiShareControllerDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShareApi
     */
    ShareApi.prototype.shareControllerDelete = function (requestParameters, options) {
        var _this = this;
        return (0, exports.ShareApiFp)(this.configuration).shareControllerDelete(requestParameters.code, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * List shares Resource: share Authorized roles: operator
     * @summary Get all
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShareApi
     */
    ShareApi.prototype.shareControllerGetAll = function (options) {
        var _this = this;
        return (0, exports.ShareApiFp)(this.configuration).shareControllerGetAll(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get a share
     * @summary Get one
     * @param {ShareApiShareControllerGetOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShareApi
     */
    ShareApi.prototype.shareControllerGetOne = function (requestParameters, options) {
        var _this = this;
        return (0, exports.ShareApiFp)(this.configuration).shareControllerGetOne(requestParameters.code, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return ShareApi;
}(base_1.BaseAPI));
exports.ShareApi = ShareApi;
