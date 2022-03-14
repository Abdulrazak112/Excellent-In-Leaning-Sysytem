import { _fetchApi, apiURL, _postApi } from "./api";

export const getStaffList = (q = {}, callback = (f) => f, error = (f) => f) => {
  const query_string = Object.keys(q)
    .map((a) => a + "=" + q[a])
    .join("&");
  // console.log(query_string, 'sss')
  _fetchApi(
    `${apiURL}/staff/list?${query_string}`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getMdas = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/get-mdas`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getMdaCode = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/mda-code`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getGl = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/get-gl`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getCadre = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/get-cadre`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getCadreCode = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/cadre-code`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const postCadre = (data = {}, callback = (f) => f, error = (f) => f) => {
  _postApi(
    `${apiURL}/staff/post-cadre`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getField = (callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/get-fields`,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const postField = (data = {}, callback = (f) => f, error = (f) => f) => {
  _postApi(
    `${apiURL}/staff/post-field`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const getResult = (data = {}, callback = (f) => f, error = (f) => f) => {
  _fetchApi(
    `${apiURL}/staff/get-result`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const newStaff = (data = {}, callback = (f) => f, error = (f) => f) => {
  _postApi(
    `${apiURL}/staff/new`,
    data,
    (resp) => {
      if (resp) {
        callback(resp);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const submitExams = (
  data = {},
  callback = (f) => f,
  error = (f) => f
) => {
  _postApi(
    `${apiURL}/staff/submit-exams`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const newGl = (data = {}, callback = (f) => f, error = (f) => f) => {
  _postApi(
    `${apiURL}/staff/new-gl`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};

export const newMDA = (data = {}, callback = (f) => f, error = (f) => f) => {
  _postApi(
    `${apiURL}/staff/new-mda`,
    data,
    (data) => {
      if (data.success) {
        callback(data.results);
      }
    },
    (err) => {
      error(err);
    }
  );
};
// export const getStaffRegistrationNo = (
//   data = {},
//   registration_no = {},
//   callback = (f) => f,
//   error = (f) => f
// ) => {
//   _fetchApi(
//     `${apiURL}/api/staff/get-registaration-no/${registration_no}`,
//     data,
//     (data) => {
//       if (data.success) {
//         callback(data.results);
//       }
//     },
//     (err) => {
//       error(err);
//     }
//   );
// };
