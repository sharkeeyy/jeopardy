//* пакеты
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const sessionConfig = require('./sessionConfig');
const getUser = require('../middleware/getUser');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('tiny'));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  // app.use(getUser);

};
module.exports = serverConfig;
