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
exports.createTranslationKey = exports.googleTranslationSchema = exports.translate = void 0;
const request_1 = require("./request");
const googleTranslationSchema_1 = require("./googleTranslationSchema");
Object.defineProperty(exports, "googleTranslationSchema", { enumerable: true, get: function () { return googleTranslationSchema_1.googleTranslationSchema; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "createTranslationKey", { enumerable: true, get: function () { return utils_1.createTranslationKey; } });
const translate = (from, to, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const key = (0, utils_1.createTranslationKey)(`${from}-${to}`, text);
        const res = yield (0, request_1.get)(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&dt=bd&dj=1&source=input&q=${encodeURIComponent(text)}`);
        const parsedResponse = googleTranslationSchema_1.googleTranslationSchema.safeParse(res);
        if (!parsedResponse.success) {
            throw new Error(`Invalid response - ${parsedResponse.error.message}`);
        }
        return {
            translation: parsedResponse.data,
            timestamp: new Date().getTime(),
            fromTo: `${from}-${to}`,
            hashKey: key,
        };
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.translate = translate;
