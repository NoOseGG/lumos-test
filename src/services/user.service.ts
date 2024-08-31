import { URLS } from "@/constants/constants";

import axios from "axios";

class UserService {
  async getUsers() {
    return axios.get(URLS.Api);
  }
}

export default new UserService();
