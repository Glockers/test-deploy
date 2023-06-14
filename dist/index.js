"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./api/routes"));
const app = (0, express_1.default)();
const PORT = process.env.API_PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.send('test yraaaa');
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at ${process.env.API_HOST}:${PORT}`);
});
//# sourceMappingURL=index.js.map