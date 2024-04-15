// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully Loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occured while fetching response from the server. Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An Error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect with the server. Please check Internet",
  },
};

 

export const SERVICE_URLS = {
  // signup_api_Call
  // userSignup->key ,{url: '/signup',method:'POST'} -> value
  userSignup: { url: '/signup', method: 'POST' },

  checkUsername: { url: '/username', method: 'POST' },
 
  //Login_Api
  userLogin: { url: '/login', method: 'POST' },
  
  getRefreshToken: { url: '/token', method: 'POST' },

  //pdf_api
  // uploadPdfFile: { url: 'csr/pdfupload', method: 'POST' },

  // getPdfDetailById: { url: '/pdfdetails', method: 'GET', query: true },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  createRecords: { url: '/create/med-records', method: 'POST' },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // Fetch Projects
  getAllRecords: { url: '/records', method: 'GET', query: true },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // fetchprojects via there id
  // getPostById: { url: '/post', method: 'GET', query: true },
};
