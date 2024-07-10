"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./services/UserService");
const PostService_1 = require("./services/PostService");
async function main() {
    const userId = "1";
    const userService = new UserService_1.UserService();
    const postService = new PostService_1.PostService();
    try {
        const user = await userService.getUser(userId);
        console.log("User:", user);
        const posts = await postService.getPostsByUser(userId);
        console.log("Posts:", posts);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("Unknown error occurred");
        }
    }
}
main();
