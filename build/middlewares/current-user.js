"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function currentUser(req, res, next) {
    var _a;
    if (!req.session || !req.session.jwt)
        return next();
    try {
        var payload = jsonwebtoken_1.default.verify((_a = req.session) === null || _a === void 0 ? void 0 : _a.jwt, process.env.JWT_KEY);
        req.currentUser = payload;
    }
    catch (error) { }
    next();
}
exports.currentUser = currentUser;
