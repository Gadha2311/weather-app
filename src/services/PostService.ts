import axios from "axios";
import { Post } from "../models/post";

export class PostService {
    async getPostsByUser(userId: string): Promise<Post[]> {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            return response.data.map((post: any) => new Post(post.id, post.userId, post.title, post.body));
        } catch (error) {
            throw new Error("Failed to fetch posts");
        }
    }
}