import "dotenv/config";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import mongoose from "mongoose";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,

  database: mongodbAdapter(mongoose.connection.db),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    modelName: "users",
  },

  trustedOrigins: [process.env.CLIENT_URL || "http://localhost:5173"],
});
