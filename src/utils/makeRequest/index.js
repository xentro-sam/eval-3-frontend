import axios from 'axios';
import {BACKEND_URL} from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    baseURL: `${BACKEND_URL}${apiEndPoint.url}`,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const {data} = await axios(requestDetails);
  return data;
};

export default makeRequest;
