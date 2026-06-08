const path = require('path');
const { readJson, writeJson } = require('../utils/file-helper');

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

function addUser(user) {
  const users = readJson(USERS_FILE, {});

  users[user.id] = {
    id: user.id,
    username: user.username,
    joinedAt: new Date().toISOString(),
  };

  writeJson(USERS_FILE, users);

  return users[user.id];
}

function removeUser(userId) {
  const users = readJson(USERS_FILE, {});

  delete users[userId];

  writeJson(USERS_FILE, users);
}

function getUsers() {
  return readJson(USERS_FILE, {});
}

function isRegistered(userId) {
  const users = readJson(USERS_FILE, {});

  return Boolean(users[userId]);
}

module.exports = {
  addUser,
  removeUser,
  getUsers,
  isRegistered,
};
