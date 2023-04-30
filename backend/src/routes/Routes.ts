import { Request, Response, Router } from "express"
import Controller from "../controller/Controller";

namespace Routes {
    export const userRouter = Router();
    export const adminRoutes = Router();
    export const authRoutes = Router();

    //* User Routes
    userRouter.get("/personalDetails", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.getPersonalDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.get("/loanDetail", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.getLoanDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.get("/accountDetail", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.getAccountDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyCard", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.applyForCard();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyLoan", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.applyForLoan();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    userRouter.post("/applyAccount", async (req: Request, res: Response) => {
        try {
            const userController = new Controller.UserController(req, res)
            await userController.applyForAccount();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    //? Admin Routes
    adminRoutes.get("/detailOfCustomers", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.getAllCustomersDetail();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    adminRoutes.delete("/deleteCustomer/:id", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.deleteCustomerData();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    adminRoutes.put("/changePersonalDetails", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.changePersonalDetailOfCustomer();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    adminRoutes.put("/changeAccountDetails", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.changeAccountDetails();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    adminRoutes.put("/changeLoanDetails", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.changeLoanDetailOfCustomer();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })
    adminRoutes.post("/signup", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.signUpAdmin();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })
    adminRoutes.post("/create", async (req: Request, res: Response) => {
        try {
            const adminController = new Controller.AdminController(req, res);
            await adminController.signUpUser();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })


    //! Authentication Routes

    authRoutes.post("/login", async (req: Request, res: Response) => {
        try {
            const authController = new Controller.AuthController(req, res);
            await authController.loginUser();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    authRoutes.post("/forgetPassword", async (req: Request, res: Response) => {
        try {
            const authController = new Controller.AuthController(req, res);
            await authController.forgetPasswordForUser();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })

    authRoutes.post("/resetPassword", async (req: Request, res: Response) => {
        try {
            const authController = new Controller.AuthController(req, res);
            await authController.resetPasswordForUser();
        } catch (error) {
            console.log(`Global Error : ${error}`)
        }
    })
}

export default Routes;