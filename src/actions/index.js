import axios from "axios";
import { URL } from "../Config/Contants";
import SetAuthorizationtoken from "../Config/SetAututhorizationtoken";
import { Set_CurrentUser, google_Login, Set_Rate, Set_TopMechanics } from "../actions/Types";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
toast.configure();
export function logout() {
  return (dispatch) => {
    localStorage.removeItem("usertoken");
    SetAuthorizationtoken(false);
    dispatch(set_CurrentUser({}));
  };
}

export function set_CurrentUser(user) {
  return {
    type: Set_CurrentUser,
    user,
  };
}

export function login(data) {
  return (dispatch) => {
    return axios.post(URL.Url + "mechanicsignin", data).then((res) => {
      if (res.data.message === "blocked") {
        toast("Blocked by Admin", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      } else {
        const token = res.data.token;
        localStorage.setItem("usertoken", token);
        SetAuthorizationtoken(token);
        dispatch(set_CurrentUser(jwt.decode(token)));
        toast("Successfully Login", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      }
    });
  };
}

export function userlogin(data) {
  return (dispatch) => {
    return axios.post(URL.Url + "usersignin", data).then((res) => {
      const token = res.data.token;
      localStorage.setItem("usertoken", token);
      SetAuthorizationtoken(token);
      dispatch(set_CurrentUser(jwt.decode(token)));
    });
  };
}

export function adminlogin(data) {
  return (dispatch) => {
    return axios.post(URL.Url + "adminsignin", data).then((res) => {
      const token = res.data.atoken;
      localStorage.setItem("usertoken", token);
      SetAuthorizationtoken(token);
      console.log(res.data);
      dispatch(set_CurrentUser(jwt.decode(token)));
    });
  };
}

export function googlelogin(data) {
  console.log(data);
  return {
    type: google_Login,
    data,
    flag: true,
  };
}

export function SetRate(users) {
  console.log(users);
  return {
    type: Set_Rate,
    users,
  };
}


export function SetTopMechanic(mechanics) {
  console.log(mechanics);
  return {
    type: Set_TopMechanics,
    mechanics,
  };
}
