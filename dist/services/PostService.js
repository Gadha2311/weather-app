"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const axios_1 = __importDefault(require("axios"));
const post_1 = require("../models/post");
class PostService {
    async getPostsByUser(userId) {
        try {
            const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            return response.data.map((post) => new post_1.Post(post.id, post.userId, post.title, post.body));
        }
        catch (error) {
            throw new Error("Failed to fetch posts");
        }
    }
}
exports.PostService = PostService;
