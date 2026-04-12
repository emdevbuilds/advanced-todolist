import { auth } from "../lib/auth.js";
import { fromNodeHeaders } from "better-auth/node";

export const requireAuth = async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = session.user; // attach user to request
  next();
};
