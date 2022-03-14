import { apiURL, _fetchApi, _postApi } from "./api";

export const getQuestions = (q = {}, callback = (f) => f, error = (f) => f) => {
  const query_string = Object.keys(q)
    .map((a) => a + "=" + q[a])
    .join("&");

  _fetchApi(
    `${apiURL}/questions/get?${query_string}`,
    (data) => {
      if (data && data.results) {
        callback(data.results);
      }
    },
    error
  );
};

export const postQuestions = (
  data = {},
  callback = (f) => f,
  error = (f) => f
) => {
  _postApi(
    `${apiURL}/questions/new`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    error
  );
};
