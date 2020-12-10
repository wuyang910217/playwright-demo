"use strict";
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
        while (_) try {
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
var playwright_1 = require("playwright");
var BrowserClient = /** @class */ (function () {
    function BrowserClient() {
    }
    BrowserClient.prototype.launch = function (type, option) {
        if (option === void 0) { option = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(type === 'chromium')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, playwright_1.chromium.launch(option)];
                    case 1:
                        _a.browser = _e.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(type === 'firefox')) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, playwright_1.firefox.launch(option)];
                    case 3:
                        _b.browser = _e.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _c = this;
                        return [4 /*yield*/, playwright_1.webkit.launch(option)];
                    case 5:
                        _c.browser = _e.sent();
                        _e.label = 6;
                    case 6:
                        _d = this;
                        return [4 /*yield*/, this.browser.newContext()];
                    case 7:
                        _d.context = _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserClient.prototype.goto = function (url) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = this;
                        return [4 /*yield*/, ((_a = this.context) === null || _a === void 0 ? void 0 : _a.newPage())];
                    case 1:
                        _c.page = _d.sent();
                        return [4 /*yield*/, ((_b = this.page) === null || _b === void 0 ? void 0 : _b.goto(url))];
                    case 2:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BrowserClient.prototype.screenshot = function (option) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.page) === null || _a === void 0 ? void 0 : _a.screenshot(__assign({}, option));
                return [2 /*return*/];
            });
        });
    };
    BrowserClient.prototype.getSelector = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$(selector))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getAllSelector = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$$(selector))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getContent = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.textContent(selector))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getText = function (item, selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(item === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$eval(selector, function (node) { return node.innerText; }))];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, item.$eval(selector, function (node) { return node.innerText; })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getAllText = function (item, selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(item === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$$eval(selector, function (node) { return node.innerText; }))];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, item.$$eval(selector, function (node) { return node.innerText; })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getImgUrl = function (item, selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(item === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$eval(selector, function (node) { return node.src; }))];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, item.$eval(selector, function (node) { return node.src; })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.getHref = function (item, selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(item === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.$eval(selector, function (node) { return node.href; }))];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, item.$eval(selector, function (node) { return node.href; })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.click = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.click(selector))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.rightClick = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.click(selector, { button: 'right' }))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.doubleClick = function (selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.dblclick(selector))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.fillInput = function (selector, text) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.page) === null || _a === void 0 ? void 0 : _a.fill(selector, text))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BrowserClient.prototype.close = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.browser) === null || _a === void 0 ? void 0 : _a.close())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return BrowserClient;
}());
exports.default = new BrowserClient();
