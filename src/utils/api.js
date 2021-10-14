import axiosInstance from './axios';

const BASE_API_URL = 'http://localhost:5000/api';
/**
 *
 * @param {Object} obj - Request parameters
 * @param {string} obj.endpoint - URL endpoint to hit
 * @param {string} obj.method - Request method
 * @param {Object} obj.payload - Request body
 * @returns {Promise} Promise object represents the response from server
 */

const makeAPICall = async ({ endpoint, method = 'POST', payload = {} }) => {
  const API_URL = `${BASE_API_URL}${endpoint}`;

  const response = await axiosInstance({
    url: API_URL,
    method,
    data: JSON.stringify(payload),
  });

  return response;
};

export default makeAPICall;
