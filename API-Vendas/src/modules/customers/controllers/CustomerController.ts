import { NextFunction, Request, Response } from "express";
import CreateCustomerService from "../services/CreateCustomerService";
import ListCustomerervice from "../services/ListCustomerService";
import ShowCustomerervice from "../services/ShowCustomerService";
import UpdateCustomerService from "../services/UpdateCustomerService";
import DeleteCustomerService from "../services/DeleteCustomerService";
import Customer from "../typeorm/entities/Customer";
export default class CustomerController{
    
    public async index(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
      try{
            const listcustomer = new ListCustomerervice();
            const customer = await listcustomer.execute();
            return response.json(customer);
      }  catch(err){
            next(err);
      }
    }
    public async show(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const showcustomer = new ShowCustomerervice();
            const Customer = await showcustomer.execute({id});
            return response.json(Customer);
        }  catch(err){
            next(err);
        }
    }
    public async create(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {name, email} = request.body;
            const createcustomer = new CreateCustomerService();
            const customer = await createcustomer.execute({name, email});
            return response.json(customer);
        }  catch(err){
            next(err);
        }
    }
    public async update(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const {name, email} = request.body;
            const updatecustomer = new UpdateCustomerService();
            const customer = await updatecustomer.execute({id, name, email});
            return response.json(customer);
        }  catch(err){
            next(err);
        }
    }

    public async delete(request : Request, response : Response, next: NextFunction) : Promise<Response | void>{
        try{
            const {id} = request.params;
            const deletecustomer = new DeleteCustomerService();
            const customer = await deletecustomer.execute({id});
            return response.json([]);
        }  catch(err){
            next(err);
        }
    }
}