const { User } = require('../models');


const userData = [{
    "id": 1,
    "first_name": "Elfrida",
    "last_name": "Brauns",
    "email": "ebrauns0@php.net",
    "username": "ebrauns0",
    "password": "bnSp5a"
  }, {
    "id": 2,
    "first_name": "Zuzana",
    "last_name": "Presslie",
    "email": "zpresslie1@live.com",
    "username": "zpresslie1",
    "password": "0pCz641Ur1"
  }, {
    "id": 3,
    "first_name": "Cicely",
    "last_name": "Hyatt",
    "email": "chyatt2@vkontakte.ru",
    "username": "chyatt2",
    "password": "5Xg6P0WNXYo"
  }, {
    "id": 4,
    "first_name": "Cord",
    "last_name": "MacCaughey",
    "email": "cmaccaughey3@europa.eu",
    "username": "cmaccaughey3",
    "password": "P1bBfafLAZ1R"
  }, {
    "id": 5,
    "first_name": "Sullivan",
    "last_name": "Geator",
    "email": "sgeator4@home.pl",
    "username": "sgeator4",
    "password": "kncdeZ"
  }, {
    "id": 6,
    "first_name": "Trixi",
    "last_name": "Mateus",
    "email": "tmateus5@cam.ac.uk",
    "username": "tmateus5",
    "password": "GqvScoWnBUbm"
  }, {
    "id": 7,
    "first_name": "Jennee",
    "last_name": "Provis",
    "email": "jprovis6@google.com",
    "username": "jprovis6",
    "password": "ZPWOXd2kBM"
  }, {
    "id": 8,
    "first_name": "Almeda",
    "last_name": "Notti",
    "email": "anotti7@sciencedaily.com",
    "username": "anotti7",
    "password": "m9lBqVhX9"
  }, {
    "id": 9,
    "first_name": "Heinrik",
    "last_name": "Bastin",
    "email": "hbastin8@google.de",
    "username": "hbastin8",
    "password": "OgTMMLxd"
  }, {
    "id": 10,
    "first_name": "Olia",
    "last_name": "Breakey",
    "email": "obreakey9@myspace.com",
    "username": "obreakey9",
    "password": "fQI6gJ8nX7Ya"
  }]

const seedUsers = () => User.bulkCreate(userData, {individualHooks:true});

module.exports = seedUsers;