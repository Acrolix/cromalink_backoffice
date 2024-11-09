import { APIAuth } from "../../api";

class PostsService {
  PostsService() {
    if (typeof PostsService.instance === "object") {
      return PostsService.instance;
    }
  }

  async getPosts(page = 1) {
    const response = await APIAuth().get(`/publications?page=${page}`);
    return response;
  }

  async getPost(id) {
    const response = await APIAuth().get(`/publications/${id}`);
    return response;
  }

  async getComments(postId) {
    const response = await APIAuth().get(`/comments/${postId}`);
    return response;
  }

  async createPost(post) {
    const response = await APIAuth().post("/publications", post);
    return response;
  }
}

export default new PostsService();
