import { Request, Response } from "express"
import DTO from "../interface/DTO"
import Service from "../service/Service"

namespace Controller {
    export class UserController {

        private req: Request;
        private res: Response;
        private service: Service.UserService<string>;

        constructor(request: Request, response: Response) {
            this.req = request;
            this.res = response;
            this.service = new Service.UserService<string>();
        }

        async getPersonalDetails() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async getLoanDetails() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async getAccountDetails() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async applyForAccount() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async applyForCard() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async applyForLoan() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }
    }

    export class AdminController {

        private req: Request;
        private res: Response;
        private service: Service.AdminService<string>;

        constructor(request: Request, response: Response) {
            this.req = request;
            this.res = response;
            this.service = new Service.AdminService<string>();
        }

        async signUpAdmin() {
            try {
                const data: DTO.Admin<string> = this.req.body;
                const admin = await this.service.signUpAdmin(data);
                return this.res.status(201).send({ message: "Admin Created Successfully !!!", admin })
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
            }
        }

        async signUpUser() {
            try {
                const data: DTO.Personal<string> = this.req.body;
                const user = await this.service.signUpUser(data);
                return this.res.status(201).send({ message: "User Created Successfully !!!", user })
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
            }
        }

        async getAllCustomersDetail() {
            try {
                const id = "8aa7caf0-e722-11ed-9cef-d148d62c68c6";
                const adminData = await this.service.getAllCustomersDetail(id);
                return this.res.status(200).send(adminData);
            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
            }
        }

        async changePersonalDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
            }
        }

        async changeLoanDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
            }
        }

        async changeAccountDetails() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
            }
        }

        async deleteCustomerData() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
            }
        }
    }

    export class AuthController {

        private req: Request;
        private res: Response;
        private service: Service.AuthService<string>;

        constructor(request: Request, response: Response) {
            this.req = request;
            this.res = response;
            this.service = new Service.AuthService<string>();
        }

        async loginUser() {
            try {
                const data: DTO.Login<string> = this.req.body;
                const token: any = await this.service.loginUser(data);
                if (token == -1) {
                    return this.res.status(200).send({ message: "Invalid Credentials !!!" })
                } else if (token == 0) {
                    return this.res.status(200).send({ message: "Invalid Credentials !!!" })
                } else {
                    return this.res.status(200).send({ token });
                }
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
            }
        }

        async forgetPasswordForUser() {
            try {
                const data:DTO.ForgetPassword<string> = this.req.body;
                const message = await this.service.forgetPasswordForUser(data);
                return this.res.status(200).send(message);
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
            }
        }

        async resetPasswordForUser() {
            try {

            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
            }
        }
    }
}

export default Controller
