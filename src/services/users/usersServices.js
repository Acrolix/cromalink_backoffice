import { APIAuth } from "../../api";

class UsersService {
  constructor() {
    if (UsersService.instance) {
      return UsersService.instance;
    }
    UsersService.instance = this;
  }

  async getUsers({ page = 1 }) {
    try {
      const response = await APIAuth().get(`/users?page=${page}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  }

  async getUser(id) {
    return await APIAuth().get(`/users/${id}`);
  }

  async createUser(user) {
    return await APIAuth().post("/users", user);
  }
}

export default new UsersService();
