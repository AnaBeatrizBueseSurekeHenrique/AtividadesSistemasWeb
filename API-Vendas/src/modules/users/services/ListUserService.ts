import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest{
    name: string;
    email: string;
    password: string;
}
export default class ListUserService{
    public async execute() : Promise<User[]>{
        const userRepository = getCustomRepository(UsersRepository);
        const users = await userRepository.find();
        return users;
    }
}