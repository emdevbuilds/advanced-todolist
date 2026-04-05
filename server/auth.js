import "dotenv/config";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // It's crucial to set your app's base URL
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:5000",
  secret: process.env.BETTER_AUTH_SECRET, // A strong random string

  // Connect to your existing MongoDB database
  database: mongooseAdapter(mongoose.connection),

  // Enable the built-in email & password provider
  emailAndPassword: {
    enabled: true,
  },

  // Optional: Add social providers like Google
  // socialProviders: {
  //     google: {
  //         clientId: process.env.GOOGLE_CLIENT_ID,
  //         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //     },
  // },

  // Define which origins are allowed to access your API
  trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:5173"],
});
