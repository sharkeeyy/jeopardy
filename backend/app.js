require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

//* Подключить Роутеры
const loginRouter = require('./routers/loginRouter');
const registrationRouter = require('./routers/registrationRouter');
const logoutRouter = require('./routers/logoutRouter');



//* Запустить роутеры
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);



app.listen(PORT, () => console.log(`Server listened on ${PORT}`));
