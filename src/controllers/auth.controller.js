const userService=require("../services/user.service.js")
const jwtProvider=require("../config/jwtProvider.js")
const bcrypt=require("bcryptjs")


const register=async(req,res)=>{

    try {
        const user=await userService.createUser(req.body);
        const jwt=jwtProvider.generateToken(user._id);


        return res.status(200).send({jwt,message:"register success"})

    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const login = async (req, res) => {
    const { email, mobile, password } = req.body;

    try {
        let user;

        if (email) {
            user = await userService.getUserByEmail(email);
        } else if (mobile) {
            user = await userService.getUserByMobile(mobile);
        } else {
            return res.status(400).json({ message: 'Email or mobile number is required' });
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found with provided email or mobile number' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).json({ jwt, message: 'Login success' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
module.exports={register,login}