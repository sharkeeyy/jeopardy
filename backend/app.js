require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

//* Подключить Роутеры
const loginRouter = require('./routers/loginRouter');
const registrationRouter = require('./routers/registrationRouter');
const logoutRouter = require('./routers/logoutRouter');
const { options } = require('./routers/registrationRouter');



//* Запустить роутеры
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// app.use(cors({origin: ['http://localhost:4000', 'http://localhost:3000'], optionsSuccessStatus: 200, credentials: true}));



app.listen(PORT, () => console.log(`Server listened on ${PORT}`));
