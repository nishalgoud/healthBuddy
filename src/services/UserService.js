import HttpClientService from "./HttpClientService ";
class UserService {
  constructor() {
    this.client = HttpClientService.get();
  }

  async createUser(userData) {
    try {
      let res = await this.client.post("/users", userData);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getUsersList() {
    try {
      let res = await this.client.get("/users");
      return res;
    } catch (error) {
      console.log(error);
    }
  }

   getUser() {
    const user = sessionStorage.getItem("userDetails") ?? localStorage.getItem("userDetails");
    return user ? JSON.parse(user) : {};
  }
}
//Enable singeton behaviour on this class
UserService.__instance = null;
UserService.get = () => {
  if (!UserService.__instance) {
    UserService.__instance = new UserService();
  }
  return UserService.__instance;
};
export default UserService;
