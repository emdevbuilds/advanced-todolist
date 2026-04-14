import "dotenv/config";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import mongoose from "mongoose";

let _auth = null;

export const auth = () => {
  if (!_auth) {
    const db = mongoose.connection.db;
    if (!db)
      throw new Error("MongoDB not connected yet. Call connectDB() first.");

    _auth = betterAuth({
      baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
      secret: process.env.BETTER_AUTH_SECRET,
      database: mongodbAdapter(db),
      emailAndPassword: { enabled: true },
      user: { modelName: "users" },
      trustedOrigins: [process.env.CLIENT_URL || "http://localhost:5173"],
    });
  }
  return _auth;
};
