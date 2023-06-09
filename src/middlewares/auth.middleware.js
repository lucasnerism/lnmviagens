import jwt from "jsonwebtoken";
import "dotenv/config.js";
// import usersService from "../services/users.service.js";
import jwtKey from "../constants/jwtKey.js";


const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(400).json({ message: "Campo authorization não encontrado nos headers" });

  const [schema, token] = authorization.split(" ");

  if (schema !== "Bearer" || !token) return res.status(401).json({ message: "Formato de token inválido" });

  jwt.verify(token, jwtKey, async (error, decode) => {
    if (error) return res.status(401).json({ message: "Token inválido" });

    // const { status, response } = await usersService.findUser(decode.userId);
    if (status === 404) return res.status(status).json(response);

    res.locals.user = response.user;
    return next();
  });
};

export default authMiddleware;