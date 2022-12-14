import HttpClientService from "./HttpClientService ";
class CareersService {
  constructor() {
    this.client = HttpClientService.get();
  }

  async getJobsList() {
    try {
      const res = await this.client.get("/jobs");
      return res;
    } catch (error) {
      console.log(error);
    }
    
  }

  
  async getJobById(id) {
    try {
      const res = await this.client.get(`/jobs/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
    
  }
  async upload(fileData) {
    try {
      let res = await this.client.post("/upload", fileData);
      return res;
    } catch (error) {
      console.log(error);
    }
  }


}
//Enable singeton behaviour on this class
CareersService.__instance = null;
CareersService.get = () => {
  if (!CareersService.__instance) {
    CareersService.__instance = new CareersService();
  }
  return CareersService.__instance;
};
export default CareersService;
