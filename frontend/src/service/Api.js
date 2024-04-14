
import axios from "axios";
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";
import { getAccessToken, getType } from "../utils/frontend-utils";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "content-type": "application/json",
  },
});

// get
axiosInstance.interceptors.request.use(
  function (config) {
    if (config.TYPE) {
      if (config.TYPE.params) {
        config.params = config.TYPE.params;
      } else if (config.TYPE.query) {
        config.url = config.url + '/' + config.TYPE.query;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// post
axiosInstance.interceptors.response.use(
  function (response) {
    //    stop global loader here
    return processResponse(response);
  },

  function (error) {
    //    stop global loader here

    return Promise.reject(processError(error));
  }
);
 

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.data?.msg || API_NOTIFICATION_MESSAGES.responseFailure,
      code: response?.code,
    };
  }
}; 
 
const processError = async (error) => {
  if (error.response) {
   

    if (error.response?.status === 403) {
      sessionStorage.clear();
    }

    else {
      console.error("ERROR IN RESPONSE: ", error);
      return {
        isError: true,
        msg: error?.response?.data?.msg || API_NOTIFICATION_MESSAGES.responseFailure,
        code: error.response.status,
      };
    }

  }

  else if (error.request) {

    
    console.error("ERROR IN REQUEST: ", error);
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  }

  else {

    
    console.error("Error in NETWORK: ", error);
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }

};


const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    const headers = {
      authorization: getAccessToken(),
    };

    let axiosConfig = {
      method: value.method,
      url: value.url,
      responseType: value.responseType,
      headers: headers,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    };

    if (body instanceof FormData) {
      axiosConfig = {
        ...axiosConfig,
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        data: body,
      };
    } else {
      axiosConfig.data = body;
      axiosConfig.TYPE = getType(value, body);
    }

    return axiosInstance(axiosConfig);
  };
}

export { API };