import { apiURL, _fetchApi, _postApi } from "./api";

export const getStudentInfo = (q = {}, callback = (f) => f, error = (f) => f) => {
  const query_string = Object.keys(q)
    .map((a) => a + "=" + q[a])
    .join("&");

  _fetchApi(
    `${apiURL}/student-info/all?${query_string}`,
    (data) => {
      if (data && data.results) {
        callback(data.results);
      }
    },
    error
  );
};

export const postStudentInfo = (
  data = {},
  callback = (f) => f,
  error = (f) => f
) => {
  _postApi(
    `${apiURL}/student-info/post`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    error
  );
};
