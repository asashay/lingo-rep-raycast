"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslationKey = void 0;
exports.shortHash = shortHash;
const lodash_1 = require("lodash");
function shortHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
    }
    return hash.toString(32);
}
const createTranslationKey = (fromTo, text) => shortHash(`${fromTo}-${(0, lodash_1.toLower)(text)}`);
exports.createTranslationKey = createTranslationKey;
