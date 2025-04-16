import dbConnect from "@/lib/mongoose";
import User from "@/models/user";
import { compare } from "bcryptjs";


authorize: async (credentials) => {
  await dbConnect();

  const user = await User.findOne({ email: credentials?.email });

  if (!user) return null;

  const isPasswordCorrect = await compare(credentials!.password, user.password);
  if (!isPasswordCorrect) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
},
