import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import User from "../models/user.js"

export const  signin=async(req, res)=>{

    const {email, password}=req.body;
    

    try {
        const existingUser = await User.findOne({ email });
       if(!existingUser){
        return res.status(404).json({ message: "User Doesn't exist" });
       }
        const isPasswordCorrect=await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(404).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            "test",
            { expiresIn: "1h" }
          );
      
           res.status(200).json({ result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" }); 
    }

}

export const signup=async(req, res)=>{
    const{name, email, username, password}=req.body;


    try {
        const existuser= await User.findOne({email});
        console.log(signup)
       if(existuser){
        return res.status(404).json({ message: "User already exist" });
       }
         
       const hashedPassword = await bcrypt.hash(password, 12);
       const result=await User.create({
              email,
              password: hashedPassword,
              name,
              username
       });
       const token=jwt.sign({email:result.email, id:result._id},"test",{
        expiresIn:'1h',
       } );
       res.status(200).json({ result, token }); 

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}



