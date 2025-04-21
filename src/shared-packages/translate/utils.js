import { toLower, find } from "lodash";
export function shortHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash = hash & hash;
    }
    return hash.toString(32);
}
export const createTranslationKey = (fromTo, text) => shortHash(`${fromTo}-${toLower(text)}`);
export const getTranslatedSentence = (sentence) => {
    return find(sentence, (s) => (s === null || s === void 0 ? void 0 : s.hasOwnProperty("orig")) && s.hasOwnProperty("trans"));
};
export const getTranslitSentence = (sentence) => {
    return find(sentence, (s) => (s === null || s === void 0 ? void 0 : s.hasOwnProperty("translit")) && s.hasOwnProperty("src_translit"));
};
