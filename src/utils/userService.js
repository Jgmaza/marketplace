const USERS_KEY = "users-list";
const USER_KEY = "user";

const addUser = (newUser) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  if (users.length === 0 || detectRepeat(newUser)) {
    users.push({ ...newUser, products: [] });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
};

const detectRepeat = (newUser) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  const user = users.find((user) => user.mail === newUser.mail);
  if (user) {
    return true;
  }
  return false;
};

const updateUsers = (data) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  const index = users.findIndex((user) => user.mail === data.mail);
  if (index > -1) {
    users[index] = {
      ...users[index],
      ...data,
    };
  }
};

const setLoguinUser = (data) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

const addProductToCart = (product) => {
  const user = JSON.parse(localStorage.getItem(USER_KEY) ?? "");

  if (user) {
    const indexProduct = user.products.findIndex(
      (prod) => prod.image === product.image
    );
    if (indexProduct > -1) {
      const count = user.products[indexProduct].count + 1;
      user.products[indexProduct] = { ...product, count };
    } else {
      user.products.push({ ...product, count: 1 });
    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    updateUsers(user);
  }
};

const deleteProductToCart = (product) => {
  const user = JSON.parse(localStorage.getItem(USER_KEY) ?? "");
  if (user) {
    const indexProduct = user.products.findIndex(
      (prod) => prod.image === product.image
    );

    if (indexProduct > -1) {
      const count = user.products[indexProduct].count - 1;
      if (count > 0) {
        user.products.push({ ...product, count });
      } else {
        user.products.splice(indexProduct, 1);
      }
    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    updateUsers(user);
  }
};

const productRepeatDetect = (user) => {
  const indexProduct = user.products.findeIndex(
    (product) => product.image === user.image
  );
  return indexProduct > -1 ? indexProduct.count + 1 : -1;
};

const detectActualUser = () => {
  const user = JSON.parse(localStorage.getItem(USER_KEY) ?? "");
  return user;
};

const loginUser = ({ name, password }) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  const user = users.find(
    (user) => user.name === name && user.password === password
  );
  return user;
};

module.exports = {
  addUser,
  detectRepeat,
  updateUsers,
  setLoguinUser,
  addProductToCart,
  detectActualUser,
  loginUser,
  detectActualUser,
  deleteProductToCart
};
