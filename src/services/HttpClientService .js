import CommonService from "./CommonService";
import axios from "axios";

class HttpClientService {
  getHeaders() {
    const token = CommonService.get().getSessionToken() || ''
    return {
      Authorization: "Bearer " + token 
    };
  }

  async get(url, header = {}) {
    try {
      let res = await axios.get(process.env.REACT_APP_SERVER_URL + url, {
        headers:Object.keys(header).length>0?{ ...this.getHeaders(),...header} :this.getHeaders(),
      });
      if (res.data) {
        return res.data;
      }
    } catch (error) {
        return {
            code:0,
            msg:error.message
        }
    }
  }
  async post(url, data,header = {}) {
    try {
      let res = await axios.post(process.env.REACT_APP_SERVER_URL + url,data, {
        headers:Object.keys(header).length>0?{ ...this.getHeaders(),...header} :this.getHeaders(),
      });
      if (res.data) {
        return res.data;
      }
    } catch (error) {
        return {
            code:0,
            msg:error.message
        }
    }
  }
}

//Enable singeton behaviour on this class
HttpClientService.__instance = null;
HttpClientService.get = () => {
  if (!HttpClientService.__instance) {
    HttpClientService.__instance = new HttpClientService();
  }
  return HttpClientService.__instance;
};
export default HttpClientService;