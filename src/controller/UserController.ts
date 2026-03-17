import { Request, Response } from "express";

export class UserController {
  async userLogin(req: Request, res: Response) {
    try {
      // req.body is already validated
      res.json({ success: true, message: "Login successful" });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  async userSignup(req: Request, res: Response) {
    try {
      res.json({ success: true, message: "Signup successful" });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}