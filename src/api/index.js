import { APIURL } from "../config";


class API {
  constructor() {
    this.url = APIURL;
  }

  async getPosts() {
    const response = await fetch(`${this.url}/publicaciones`);
    const data = await response.json();
    return data;
  }

  async getPost(id) {
    const response = await fetch(`${this.url}/publicaciones/${id}`);
    const data = await response.json();
    return data;
  }

  async getComments(postId) {
    const response = await fetch(`${this.url}/comentarios/${postId}`);
    const data = await response.json();
    return data;
  }
}

export default new API();