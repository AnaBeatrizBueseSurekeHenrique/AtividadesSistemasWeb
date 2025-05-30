import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from "src/shared/http/middleware/isAuthenticated";
import CustomerController from "../controllers/CustomerController";

const customersRouter = Router();
const custumerController = new CustomerController();
customersRouter.use(isAuthenticated);

customersRouter.get('/', async(req, res, next) => {
    try{
        await custumerController.index(req, res, next);
    } catch(err){
        next(err);
    }
});
customersRouter.get('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
  }),
  async (req, res, next) => {
    try {
      await custumerController.show(req, res, next);
    } catch (err) {
      next(err);
    }
  });
  
  customersRouter.post('/',  celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
    }
  }),
  async (req, res, next) => {
    try {
      await custumerController.create(req, res, next);
    } catch (err) {
      next(err);
    }
  });
  

  customersRouter.put('/:id',  celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
    }
  }),async (req, res, next) => {
    try {
      await custumerController.update(req, res, next);
    } catch (err) {
      next(err);
    }
  });
  
  customersRouter.delete('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
  }), async (req, res, next) => {
    try {
      await custumerController.delete(req, res, next);
    } catch (err) {
      next(err);
    }
  });
  

export default customersRouter;