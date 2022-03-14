import { apiURL, _fetchApi, _postApi } from "./api";

export const getTransactions = (
  q = {},
  callback = (f) => f,
  error = (f) => f
) => {
  const query_string = Object.keys(q)
    .map((a) => a + "=" + q[a])
    .join("&");

  _fetchApi(
    `${apiURL}/transactions/get?${query_string}`,
    (data) => {
      if (data && data.results) {
        callback(data.results);
      }
    },
    error
  );
};

export const updateMark = (
  data = {},
  callback = (f) => f,
  error = (f) => f
) => {
  _postApi(
    `${apiURL}/mark/update`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    error
  );
};

export const postTransactions = (
  data = {},
  callback = (f) => f,
  error = (f) => f
) => {
  _postApi(
    `${apiURL}/transactions/new`,
    data,
    (resp) => {
      if (resp && resp.results) {
        callback(resp.results);
      }
    },
    error
  );
};
