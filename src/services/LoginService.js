import HttpClientService from "./HttpClientService ";
class LoginService {
  constructor() {
    this.client = HttpClientService.get();
  }

  async getRoles() {
    try {
      let res = await this.client.get("/users/getRoles");
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async login(userData, isRemembermeChecked=false) {
    try {
      let res = await this.client.post("/login", userData);
      if (res.code) {
        if(isRemembermeChecked){
          localStorage.setItem("access_token", res.jwtToken);
          localStorage.setItem("userDetails", JSON.stringify(res.user));
          localStorage.setItem("userRoles", JSON.stringify(res.roles));
        }
        else{
          sessionStorage.setItem("access_token", res.jwtToken);
          sessionStorage.setItem("userDetails", JSON.stringify(res.user));
          sessionStorage.setItem("userRoles", JSON.stringify(res.roles));
        }

      }
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async resetPassword(resetPasswordData) {
    try {
      const res = await this.client.post("/resetPassword", resetPasswordData);

      return res;
    } catch (error) {
      console.log(error);
    }
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
//Enable singeton behaviour on this class
LoginService.__instance = null;
LoginService.get = () => {
  if (!LoginService.__instance) {
    LoginService.__instance = new LoginService();
  }
  return LoginService.__instance;
};
export default LoginService;
