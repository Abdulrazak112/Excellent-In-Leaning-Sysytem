import { apiURL, _fetchApi, _postApi } from "./api";

export const createUser = (
  form = {},
  callback = (f) => f,
  error = (f) => f
) => {
  //   console.log(form, '===========')
  _postApi(
    `${apiURL}/users/create`,
    form,
    (data) => {
      if (data && data.success) {
        callback(data);
      } else {
        error(data.msg);
      }
    },
    (err) => {
      error(err.msg);
    }
  );
};

export const login = (
  { username = "", password = "" },
  callback = (f) => f,
  error = (f) => f
) => {
  let success = async (results) => {
    const { user, token } = results;
    if (token) {
      localStorage.setItem("@school_management:user", JSON.stringify(token));
    }
    if (results && results.success) {
      const { token } = results;
      callback();
    } else {
      if (results.message) {
        error(results.message);
      } else {
        error("Cannot login at this time, try again later");
      }
    }
  };

  let error_cb = (err) => {
    console.log("err", err);
    error("Unable to login at this time, try again later!");
  };
  _postApi(`${apiURL}/users/login`, { username, password }, success, error_cb);
};

export const staffLogin = (
  { reg_number = "", password = "" },
  callback = (f) => f,
  error = (f) => f
) => {
  let success = async (results) => {
    const { user, token } = results;
    if (token) {
      localStorage.setItem("@exam_system:staff", JSON.stringify(token));
    }
    if (results && results.success) {
      const { token } = results;
      callback(results);
    } else {
      if (results.message) {
        error(results.message);
      } else {
        error("Cannot login at this time, try again later");
      }
    }
  };

  let error_cb = (err) => {
    console.log("err", err);
    error("Unable to login at this time, try again later!");
  };
  _postApi(
    `${apiURL}/users/staff-login`,
    { reg_number, password },
    success,
    error_cb
  );
};

export function getProfile() {
  // return (dispatch) => {
  // //   const user = store.getState().auth.user;
  //   _fetchApi(
  //     `${apiURL}/users/${user.pcn_no}`,
  //     (data) => {
  //     //   dispatch({ type: SET_PROFILE, payload: data.results });
  //       // console.log(data);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // };
}
