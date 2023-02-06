const { User } = require("../models");

exports.GetAllUser = async function (query) {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertUser = async function (query) {
  try {
    const user = await User.create({
      email: query.email,
      username: query.username,
      name: query.name,
      password: query.password,
      address: query.address,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return user;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.GetUserByID = async function (idParam) {
  try {
    const user = await User.findAll({
      where: {
        id: idParam,
      },
    });

    return user;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.UpdateUser = async function (idParam, query) {
  try {
    const user = await User.update(
      {
        email: query.email,
        username: query.username,
        name: query.name,
        password: query.password,
        address: query.address,
        updatedAt: new Date(),
      },
      {
        where: {
          id: idParam,
        },
      }
    );

    return user;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.DeleteUser = async function (idParam) {
  try {
    const user = await User.destroy({
      where: {
        id: idParam,
      },
    });

    return user;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};
