"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://padrao:p34c3m4k3r@localhost:3306/pitu');
exports.default = sequelize;
