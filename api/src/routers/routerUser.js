import { Router } from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const router = Router();

router.post("/signup", async (req, res) => {
  const { email, password, name, username } = req.body;

  const saltRounds = 10;
  const passwordHash = bcrypt.hashSync(password, saltRounds);

  try {
    const newUser = await User.create({
      name,
      username,
      email,
      password: passwordHash,
    });

    return res.status(200).json({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
    });
  } catch (error) {
    if (error.keyValue) {
      return res
        .status(422)
        .json({ message: "E-mail ou nome de usuario já existe." });
    }
  }

  return res.status(500).json({ message: "Internal error." });
});
