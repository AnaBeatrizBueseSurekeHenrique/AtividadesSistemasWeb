import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";


interface IRequest{
    name: string;
    email: string;
    password: string;
}
export default class ListCostumerService{
    public async execute() : Promise<Customer[]>{
        const customerRepository = getCustomRepository(CustomersRepository);
        const customers = await customerRepository.find();
        return customers;
    }
}