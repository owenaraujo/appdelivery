import { Router } from "express";
import User from "../models/user";
const router = Router();

router.get('/', (req,res)=>{
res.render('index')

})
router.get('/menu', (req,res)=>{
res.render('menu')

})
export default router;
