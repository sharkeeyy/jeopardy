const router = require('express').Router();
const bcrypt = require('bcrypt');
// const { User } = require('../db/models');


router.post('/', async (req, res) => {
  // const{user} = res.locals
  // try {
  //   const { email, password } = req.body;
  //   const logUser = await User.findOne({ where: { email } });
  //   if (logUser) {
  //     const validPassword = await bcrypt.compare(password, logUser.password);
  //     if (validPassword) {
  //       req.session.user_id = logUser.id;
  //       return res.json({ status: 'succes', url: '/' });
  //     }
  //   }
  
  //   return res.status(404).json({ status: 'error', message: 'Неправильный адрес электронной почты или пароль' });
  // } catch (error) {
  //   console.log(error.message);
  // }
});

module.exports = router;
