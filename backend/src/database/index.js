const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("../model/User");

const connection = new Sequelize(db);

User.init(connection);

module.exports = connection;
