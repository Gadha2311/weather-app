import axios from "axios";
import { User } from "../models/user";

export class UserService {
    async getUser(userId: string): Promise<User> {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = response.data;
            return new User(data.id, data.name, data.email);
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }
}