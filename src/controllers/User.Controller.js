import  bcrypt from 'bcrypt';
import user from '../models/user.models.js';

// Register route
export const RegisterUser= async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new user({ name, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  //Login Route
export const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const Loginuser = await user.findOne({ email });
      if (!Loginuser) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, Loginuser.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };