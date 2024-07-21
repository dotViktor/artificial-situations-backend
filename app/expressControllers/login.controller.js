import userStore from "../services/UserStore.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const loginController = (req, res, next) => {
  userStore.setUser(req.body.user);

  res.status(200).send(`User ${userStore.getUser().name} successfully set`);
  next();
};

export default loginController;
