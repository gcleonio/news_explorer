import { baseUrl } from "./constants";

export function checkServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

export const signUp = ({ email, password, name }) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ message: "User successfully registered!" });
  //   }, 500);
  // });
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkServerResponse);
};

export const signIn = ({ email, password }) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ token: "fake-jwt-token" });
  //   }, 500);
  // });
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
};

export const checkToken = (token) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({
  //       data: {
  //         username: "JamesBond",
  //         email: "fake-email@example.com",
  //         _id: "fake-id",
  //       },
  //     });
  //   }, 500);
  // });
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};
