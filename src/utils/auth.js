// export const authorize = (email, password) => {
//   // Pretend we did a fetch request that gave us back a token
//   return new Promise((resolve, reject) => {
//     resolve({ token: "a fake token" });
//   });
// };

// export const checkToken = (token) => {
//   // Pretend we did a fetch request that gave us back a user
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
//     });
//   });
// };

export const signUp = async () => {
  return new Promise((resolve, reject) => {
    resolve({ message: "User successfully registered!" });
  });
};

export const signIn = async () => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = async (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        name: "John Smith",
        email: "fake-email@example.com",
        _id: "fake-id",
      },
    });
  });
};
