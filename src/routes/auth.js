import { Router } from "express";
import User from "../models/user";
const router = Router();

router.post("/", async () => {
  const { username, phone, email, adress, password } = req.body;
  const data = { username, phone, email, adress, password: await User.encrypPassword(password) };
  const newUser = new User(data);

  console.log(newUser);
});
export default router;
