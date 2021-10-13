import axiosInstance from './axios';

/**
 *
 * @param {Object} obj - Request parameters
 * @param {string} obj.url - URL to call
 * @param {string} obj.method - Request method
 * @param {Object} obj.payload - Request body
 * @returns {Promise} Promise object represents the response from server
 */

const makeAPICall = async ({ url, method = 'POST', payload }) => {
  const BASE_API_URL = 'http://localhost:5000/api';
  const API_URL = `${BASE_API_URL}${url}`;

  const response = await axiosInstance({
    url: API_URL,
    method,
    data: JSON.stringify(payload),
  });

  return response;
};

export default makeAPICall;
