import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UsersTokensRepository";
import AppError from "src/shared/errors/AppError";
import EtherealMail from "@config/mail/EtherealMail";
import path from 'path'
import { link } from "joi";

interface IRequest{
    email: string;
}

export default class SendForgotPasswordEmailService{
    public async execute({email} : IRequest) : Promise<void>{
        const userRepository = getCustomRepository(UserRepository);
        const userTokenRepository = getCustomRepository(UserTokensRepository);
        const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');
        const user = await userRepository.findByEmail(email);
        if(!user){
            throw new AppError('User does not exist.');
        }
        const {token} = await userTokenRepository.createToken(user.id);
        //implementação do envio do token
        console.log(user.id);
        await EtherealMail.sendMail({
            to: {name: user.name, email:user.email},
            subject: '[API VENDAS] Recuperação de Senha',
            templateData: {
                file: forgotPasswordTemplate,
                variables: {
                    name: user.name,
                    link: `http://localhost:3000/reset_password?token=${token}`
                }
            }
        });
    }
}