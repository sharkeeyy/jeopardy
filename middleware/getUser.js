// const { User } = require('../db/models');
// ищем юзера в Бд
// async function getUser(req, res, next) {
//   if (req.session?.user_id) {
//     const user = await User.findByPk((req.session.user_id));
//     res.locals.user = user;
//   }
//   next();
// }
// module.exports = getUser;
