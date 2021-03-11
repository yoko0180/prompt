"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptConfirm = exports.promptAutocomplete = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
function promptAutocomplete(_a) {
    var message = _a.message, src = _a.src;
    return inquirer_1.default
        .prompt([
        {
            type: 'autocomplete',
            name: 'selected',
            message: message,
            source: function (answers, input) {
                input = input || '';
                return Promise.resolve(src).then(function (result) {
                    return result
                        .map(function (a) { return '' + a; })
                        .filter(function (a) { return a.toLowerCase().indexOf(input) !== -1; });
                });
            },
        },
    ])
        .then(function (answers) { return answers.selected; });
}
exports.promptAutocomplete = promptAutocomplete;
function promptConfirm(_a) {
    var message = _a.message, _b = _a.defaultValue, defaultValue = _b === void 0 ? true : _b;
    return inquirer_1.default
        .prompt([
        {
            type: 'confirm',
            name: 'confirmKey',
            message: message,
            default: defaultValue,
        },
    ])
        .then(function (answers) {
        if (answers.confirmKey) {
            return true;
        }
        else {
            return false;
        }
    });
}
exports.promptConfirm = promptConfirm;
