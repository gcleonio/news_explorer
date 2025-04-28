export const signUp = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "User successfully registered!" });
    }, 500);
  });
};

export const signIn = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token" });
    }, 500);
  });
};

export const checkToken = async (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          username: "JamesBond",
          email: "fake-email@example.com",
          _id: "fake-id",
        },
      });
    }, 500);
  });
};
