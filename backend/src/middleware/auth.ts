import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";

//Check the authorization token
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: "RS256",
  });

 
  export const jwtParse = async(
    req: Request, 
    res: Response, 
    next: NextFunction) => {

  }
  