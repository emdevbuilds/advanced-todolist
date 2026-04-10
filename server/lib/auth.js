import "dotenv/config";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import mongoose from "mongoose";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000",
  secret: process.env.BETTER_AUTH_SECRET,

  // Use a getter to ensure we grab the connection AFTER it's established
  database: mongodbAdapter(mongoose.connection.db, {
    client: mongoose.connection.getClient(),
  }),

  emailAndPassword: {
    enabled: true,
  },

  // Important: Better Auth uses "user" by default.
  // If your existing Mongoose models use "User",
  // match that name here.
  user: {
    modelName: "users",
  },

  trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:5173"],
});
