const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');



router.post('/', async (req, res) => {
  try {
    const {
      name, password,
    } = req.body;
    console.log(req.body);
    const findUser = await User.findOne({
      where: {
        name,
      },
      raw: true,
    });
    console.log(name);
    // if (findUser) {
    //   return res.status(404).json({  message: 'Пользователь с таким email уже существует!' });
    // }
    // if (password !== passwordConfirm) {
    //   return res.status(404).json({  message: 'Пароли не совпадают' });
    // }
    // if (login.length > 30 || password.length > 30) {
    //   return res.status(404).json({  message: 'Логин и пароль не должны содержать более 30 символов' });
    // }
    // if (password.length < 8) {
    //   return res.status(404).json({ message: 'Длина пароля должна быть больше 7 символов' });
    // }
    // if (!login) {
    //   return res.status(404).json({ message: 'Поле login не должно быть пустым' });
    // }
    // if (!email) {
    //   return res.status(404).json({  message: 'Поле email не должно быть пустым' });
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      password: hashedPassword,
    });
    req.session.user_id = newUser.id;
    return res.status(200).json({  message: 'done', user: name });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
