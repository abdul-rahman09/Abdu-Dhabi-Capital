import axios from "axios";
import isFunction from "lodash/isFunction";
import size from "lodash/size";

const initVal = {
  _cancelToken: null,
};
class API {
  _cancelToken: any = initVal._cancelToken;
  failedResponse = (error: any, callback?: Function): Promise<any> => {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      window.location.replace("/");
    }
    const data =
      error.response && error.response.data ? error.response.data : {};
    if (isFunction(callback)) {
      callback(data);
    }
    return Promise.reject(data);
  };

  fetch = (
    route: string,
    callback?: Function,
    config?: Record<string, any>
  ): Promise<any> => {
    let axiosConfig = {};
    if (!route) {
      return Promise.reject();
    }
    if (config && size(config) > 0) {
      axiosConfig = {
        ...config,
      };
    }

    return axios
      .get(route, axiosConfig)
      .then((response) => {
        this._cancelToken = initVal._cancelToken;
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
        }
        return this.failedResponse(error, callback);
      });
  };

  postRequest = (
    route: string,
    data = {},
    callback?: Function
  ): Promise<any> => {
    return axios
      .post(route, data)
      .then((response) => {
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  };

  patchRequest = (
    route: string,
    data: any,
    callback?: Function
  ): Promise<any> => {
    return axios
      .patch(route, data)
      .then((response) => {
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  };

  putRequest = (
    route: string,
    data = {},
    config?: any,
    callback?: Function
  ): Promise<any> => {
    return axios
      .put(route, data, config)
      .then((response) => {
        if (callback && isFunction(callback)) {
          callback(response.data);
        }
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  };

  deleteRequest = (route: string, callback?: Function) => {
    return axios
      .delete(route)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return this.failedResponse(error, callback);
      });
  };
}

export default API;
