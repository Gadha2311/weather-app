"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = __importDefault(require("axios"));
const user_1 = require("../models/user");
class UserService {
    async getUser(userId) {
        try {
            const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = response.data;
            return new user_1.User(data.id, data.name, data.email);
        }
        catch (error) {
            throw new Error("Failed to fetch user");
        }
    }
}
exports.UserService = UserService;
