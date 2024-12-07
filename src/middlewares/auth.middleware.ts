import dotenv from "dotenv";
import * as process from "process";
import { auth } from "express-oauth2-jwt-bearer";

dotenv.config();

export const authenticate = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  tokenSigningAlg: "RS256"
});
