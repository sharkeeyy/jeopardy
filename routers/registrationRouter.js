const router = require('express').Router();
const bcrypt = require('bcrypt');
// const { User } = require('../db/models');



router.post('/', async (req, res) => {
  // try {
  //   const {
  //     login, email, password, passwordConfirm,
  //   } = req.body;
  //   const findUser = await User.findOne({
  //     where: {
  //       email,
  //     },
  //     raw: true,
  //   });
  //   if (findUser) {
  //     return res.status(404).json({ status: 'error', message: 'Пользователь с таким email уже существует!' });
  //   }
  //   if (password !== passwordConfirm) {
  //     return res.status(404).json({ status: 'error', message: 'Пароли не совпадают' });
  //   }
  //   if (login.length > 30 || password.length > 30) {
  //     return res.status(404).json({ status: 'error', message: 'Логин и пароль не должны содержать более 30 символов' });
  //   }
  //   if (password.length < 8) {
  //     return res.status(404).json({ status: 'error', message: 'Длина пароля должна быть больше 7 символов' });
  //   }
  //   if (!login) {
  //     return res.status(404).json({ status: 'error', message: 'Поле login не должно быть пустым' });
  //   }
  //   if (!email) {
  //     return res.status(404).json({ status: 'error', message: 'Поле email не должно быть пустым' });
  //   }
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const newUser = await User.create({
  //     login,
  //     email,
  //     password: hashedPassword,
  //   });
  //   req.session.user_id = newUser.id;
  //   return res.status(200).json({ status: 'success', url: '/' });
  // } catch (error) {
  //   console.log(error.message);
  // }
});
module.exports = router;
