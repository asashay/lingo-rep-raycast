"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleTranslationSchema = void 0;
const zod_1 = require("zod");
// Define the schema for translation sentences
const translationSchema = zod_1.z.object({
    trans: zod_1.z.string(),
    orig: zod_1.z.string(),
    backend: zod_1.z.number(),
});
// Define the schema for reverse translation entries
const reverseTranslationEntrySchema = zod_1.z.object({
    word: zod_1.z.string(),
    reverse_translation: zod_1.z.array(zod_1.z.string()),
    score: zod_1.z.number().optional(),
});
// Define the schema for dictionary entries
const dictionaryEntrySchema = zod_1.z.object({
    pos: zod_1.z.string(),
    terms: zod_1.z.array(zod_1.z.string()),
    entry: zod_1.z.array(reverseTranslationEntrySchema),
    base_form: zod_1.z.string(),
    pos_enum: zod_1.z.number(),
});
// Define the schema for the spell checker (assuming its structure from your object)
const spellSchema = zod_1.z.object({}).optional();
const ldResult = zod_1.z
    .object({
    srclangs: zod_1.z.array(zod_1.z.string()),
    srclangs_confidences: zod_1.z.array(zod_1.z.number()),
    extended_srclangs: zod_1.z.array(zod_1.z.string()),
})
    .optional();
// Define the top-level schema combining all parts
exports.googleTranslationSchema = zod_1.z.object({
    sentences: zod_1.z.array(translationSchema).optional(),
    dict: zod_1.z.array(dictionaryEntrySchema).optional(),
    src: zod_1.z.string().optional(),
    ld_result: ldResult,
    spell: spellSchema,
    confidence: zod_1.z.number().optional(),
});
