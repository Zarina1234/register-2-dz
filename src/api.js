const users = {};

export const newUser = (user) => {
  return new Promise((resolve, reject) => {
    if (users[user.username]) {
      // throw new Error("User already exists");
      reject(new Error("User already exists"));
    } else {
      users[user.username] = user;
      resolve({
        success: 200,
        data: user
      });
    }
  });
};
