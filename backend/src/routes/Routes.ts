import { Request, Response, Router } from "express"
import Controller from "../controller/Controller";

namespace Routes{
    const userRouter = Router();

    //* User Routes
    userRouter.get("/personalDetails",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.getPersonalDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.get("/loanDetail",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.getLoanDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.get("/accountDetail",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.getAccountDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyCard",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.applyForCard();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyLoan",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.applyForLoan();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyAccount",async(req:Request,res:Response)=>{
        try {
            const userController = new Controller.UserController(req,res)
            await userController.applyForAccount();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    //? Admin Routes
    userRouter.get("/detailsOfCustomers",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }    
    })

    userRouter.delete("/deleteCustomer/:id",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.put("/changePersonalDetails",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.put("/changeAccountDetails",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.put("/changeLoanDetails",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })


    //! Authentication Routes
    userRouter.post("/signup",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/login",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/forgetPassword",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/resetPassword",async(req:Request,res:Response)=>{
        try {
            
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })
}

export default Routes;