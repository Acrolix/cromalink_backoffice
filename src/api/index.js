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
}

export default new API();