import { NextFunction, Request, Response } from "express";
import SendForgotPasswordEmailServise from "../services/SendForgotPasswordEmailService";

export default class ForgotPasswordController{
    public async create(request: Request, response: Response, next: NextFunction) : Promise<Response | void>{
        try{
            const{email} = request.body;
            const sendForgotPasswordEmail = new SendForgotPasswordEmailServise();
            await sendForgotPasswordEmail.execute({email});
            return response.status(204).json();
        } catch(err){
            next(err);
        }
    }
}