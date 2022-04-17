export const apiURL = "http://localhost:34567/api";

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  //   const { facilityId } = store.getState().auth.user;
  //   let actualURL = `${url}/${facilityId}`
  fetch(url)
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(url);
      if (response) {
        success(response);
      } else {
        // console.log('Empty response');
        empty();
      }
    })
    .catch((err) => {
      // console.log(url);
      error(err);
    });
};

/**
 * _postApi()
 * An helper function that posts data to the database
 * @params route (string) => the api route to submit on
 * @params data (object) => item to be submitted
 * @params callback => optional callback function
 */
const _postApi = (url, data = [], success = (f) => f, error = (f) => f) => {
  //   const { facilityId } = store.getState().auth.user;
  //   data.facilityId = facilityId;
  const created_by = "developer";
  const obj = { ...data, created_by };
  // console.log(obj);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((resp) => resp.json())
    .then((response) => {
      // console.log(response);
      success(response);
    })
    .catch((err) => {
      // console.log(url);
      error(err);
    });
};

/**
 * _deleteData()
 * An helper function that deletes data from the database
 * @params route (String) => the api route
 * @params data (object) => object containing the details of
 * the item to be deleted
 * @params callback (func) => optional callback
 */
const _deleteApi = (
  route,
  data = {},
  callback = (f) => f,
  err_cb = (f) => f
) => {
  //   const { facilityId } = store.getState().auth.user;
  //   data.facilityId = facilityId

  fetch(route, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null,
  })
    .then(function (response) {
      // if the status of the response is greater than 400, then error is returned
      if (response.status >= 400) {
        if (err_cb) {
          err_cb();
        }
      }
      if (callback) {
        callback();
      }
    })
    .catch(function (err) {
      return err_cb(err);
    });
};

const _updateApi = (url, data, success, error) => {
  //   const { facilityId } = store.getState().auth.user;
  //   data.facilityId = facilityId
  fetch(`${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      if (response.status >= 400) {
        error(response);
      } else {
        success();
      }
    })
    .catch((err) => error(err));
};

export { _fetchApi, _postApi, _deleteApi, _updateApi };
