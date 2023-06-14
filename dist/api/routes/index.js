"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meetup_router_1 = __importDefault(require("./meetup.router"));
// import authRouter from './auth.router';
const router = (0, express_1.Router)();
router.use('/meetup', meetup_router_1.default);
// router.use(authRouter);
exports.default = router;
//# sourceMappingURL=index.js.map