import api from "../api";

const request = ({
  url,
  method,
  data,
  callback,
}) => api(url, { method, data }).then(resp => {
  if (callback) {
    callback(null, resp);
  }
}).catch(err => {
  if (callback) {
    callback(err, null);
  }
});

export default request;
