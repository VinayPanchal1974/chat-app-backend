import express, { Request, Response, Router } from "express";
import { UserController } from "@src/controller/UserController.js";
import { validate } from "@src/middleware/validate.middleware.js";
import { createUserSchema } from "@src/validators/user.validator.js";
import { createVersionedRoute } from "@src/utils/routeHelper.js";

export class UserRouter {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = express.Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Login route with versioning and middleware
    this.router.post(
      createVersionedRoute('v1', '/login'),
      validate(createUserSchema),
      this.userController.userLogin.bind(this.userController)
    );

    // Signup route with versioning and middleware
    this.router.post(
      createVersionedRoute('v1', '/signup'),
      validate(createUserSchema),
      this.userController.userSignup.bind(this.userController)
    );
  }
}
