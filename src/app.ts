import { UserService } from "./services/UserService";
import { PostService } from "./services/PostService";

async function main() {
    const userId = "1";
    
    const userService = new UserService();
    const postService = new PostService();

    try {
        const user = await userService.getUser(userId);
        console.log("User:", user);

        const posts = await postService.getPostsByUser(userId);
        console.log("Posts:", posts);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        } else {
            console.error("Unknown error occurred");
        }
    }
}

main();