class CommonService {
  isAuthenticated() {
    if (
      sessionStorage.getItem("access_token") ||
      localStorage.getItem("access_token")
    ) {
      return true;
    }
    return false;
  }

  getSessionToken() {
    return (
      sessionStorage.getItem("access_token") ||
      localStorage.getItem("access_token")
    );
  }
}
//Enable singeton behaviour on this class
CommonService.__instance = null;
CommonService.get = () => {
  if (!CommonService.__instance) {
    CommonService.__instance = new CommonService();
  }
  return CommonService.__instance;
};
export default CommonService;
