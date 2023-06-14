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
exports.checkDatabaseConnection = exports.sequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
const postgres_1 = require("@vercel/postgres");
exports.sequelizeConnection = new sequelize_1.Sequelize(process.env.POSTGRES_URL, {
    dialectModule: postgres_1.db
});
function checkDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelizeConnection.sync({ force: true });
            yield exports.sequelizeConnection.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
exports.checkDatabaseConnection = checkDatabaseConnection;
//# sourceMappingURL=db.config.js.map