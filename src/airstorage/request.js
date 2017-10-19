import api from "../api";

const request = ({
  url,
  method,
  params,
  callback,
}) => api(url, { method, params }).then(resp => {
  if (callback) {
    callback(null, resp);
  }
}).catch(err => {
  if (callback) {
    callback(err, null);
  }
});

export default request;
