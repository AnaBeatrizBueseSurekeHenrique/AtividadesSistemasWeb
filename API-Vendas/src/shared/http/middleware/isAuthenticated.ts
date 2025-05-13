import auth from "@config/auth";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "src/shared/errors/AppError";
interface ITokenPayLoad{
    iat:number;
    exp: number;
    sub:string;
}
export default function isAuthenticated(request: Request, response: Response, next: NextFunction) : void{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        throw new AppError('JWT Token is missing', 401);
    }
    const [type, token] = authHeader.split(' ');
    try{
        const decodedToken = verify(token, auth.jwt.secret);
        const {sub} = decodedToken as ITokenPayLoad;
        request.user = {id : sub};
        return next();
    }catch{
        throw new AppError('Invalid JWT Token', 401);
    }
}