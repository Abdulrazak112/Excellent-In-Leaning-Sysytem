import { apiURL, _fetchApi, _postApi } from "./api";

export const getTeachersInfo = (q = {}, callback = (f) => f, error = (f) => f) => {
    const query_string = Object.keys(q)
        .map((a) => a + "=" + q[a])
        .join("&");

    _fetchApi(
        `${apiURL}/teachers-info/all?${query_string}`,
        (data) => {
            if (data && data.results) {
                callback(data.results);
            }
        },
        error
    );
};

export const postTeachersInfo = (
    data = {},
    callback = (f) => f,
    error = (f) => f
) => {
    _postApi(
        `${apiURL}/teachers-info/post`,
        data,
        (data) => {
            if (data.success) {
                callback(data.results);
            }
        },
        error
    );
};
