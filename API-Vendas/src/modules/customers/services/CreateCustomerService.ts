import { getCustomRepository } from "typeorm";

import AppError from "src/shared/errors/AppError";
import Customer from "../typeorm/entities/Customer";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";

interface IRequest {
  name: string;
  email: string;
}
export default class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customerRepository = getCustomRepository(CustomersRepository);
    const emailsExists = await customerRepository.findByEmail(email);
    if (emailsExists) {
      throw new AppError("Email adress already used");
    }
    const customer = customerRepository.create({
      name,
      email,
    });
    await customerRepository.save(customer);
    return customer;
  }
}
