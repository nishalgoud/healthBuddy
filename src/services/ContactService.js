import HttpClientService from "./HttpClientService ";
class ContactService {
  constructor() {
    this.client = HttpClientService.get();
  }

  async createContact(contactDetails) {
    try {
      const res = await this.client.post("/contact", contactDetails);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getInquiryTypes() {
    try {
      const res = await this.client.get("/inquiryTypes");
      return res;
    } catch (error) {
      console.log(error);
    }
  }


}
//Enable singeton behaviour on this class
ContactService.__instance = null;
ContactService.get = () => {
  if (!ContactService.__instance) {
    ContactService.__instance = new ContactService();
  }
  return ContactService.__instance;
};
export default ContactService;
