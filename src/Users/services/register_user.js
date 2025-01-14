require('dotenv').config();
const bcrypt=require('bcrypt');
const User = require('../../Models/userModel');

//register user
const registerUser = async({fname, lname, email, pass})=> {

    if (!fname || !lname || !email || !pass || !fname.trim() || !lname.trim() || !email.trim() || !pass.trim()){
        
        throw({status:400, message:"Please provide all required fields"});

    }
    const emailfound = await User.findOne({email:email});
    if (emailfound){
        throw({status:400,message:"This email is already registered. Please log in use a different email to sign up."})
    }
    const hasedPassword = await bcrypt.hash(pass,10);
    const newuser = await User.create({fname, lname, email, pass:hasedPassword});

    const userResponse = { ...newuser._doc};
    delete userResponse.pass;
    

    return userResponse //return user detail
}

module.exports = registerUser;