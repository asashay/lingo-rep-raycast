"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = exports.request = void 0;
const axios_1 = require("axios");
const request = (_a) => __awaiter(void 0, [_a], void 0, function* ({ method, data, url, }) {
    // what's options type?
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        data: data && method === "POST" ? JSON.stringify(data) : undefined,
        url: url ? url : "http://localhost:3001/api/v1/translate",
    };
    const response = yield (0, axios_1.default)(options);
    return response.data;
});
exports.request = request;
const get = (url) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, exports.request)({ method: "get", url });
});
exports.get = get;
const post = (data, url) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, exports.request)({ method: "post", data, url });
});
exports.post = post;
