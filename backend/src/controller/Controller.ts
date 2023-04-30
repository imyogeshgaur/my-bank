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
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async getAccountDetails() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async applyForAccount() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async applyForCard() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async applyForLoan() {
            try {

            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

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
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async signUpUser() {
            try {
                const data: DTO.Personal<string> = this.req.body;
                const user = await this.service.signUpUser(data);
                return this.res.status(201).send({ message: "User Created Successfully !!!", user })
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async getAllCustomersDetail() {
            try {
                const id = "8aa7caf0-e722-11ed-9cef-d148d62c68c6";
                const adminData = await this.service.getAllCustomersDetail(id);
                return this.res.status(200).send(adminData);
            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async changePersonalDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async changeLoanDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async changeAccountDetails() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async deleteCustomerData() {
            try {

            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
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
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async forgetPasswordForUser() {
            try {
                const data: DTO.ForgetPassword<string> = this.req.body;
                const message = await this.service.forgetPasswordForUser(data);
                return this.res.status(200).send(message);
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async resetPasswordForUser() {
            try {
                const token: any = this.req.headers.authorization;
                const password:string = await this.req.body.password;
                const isReset: Array<number> = await this.service.resetPasswordForUser(token,password);
                if (isReset[0]) {
                    return this.res.status(200).send({ message: "Password Reset Successfully !!!" })
                } else {
                    return this.res.status(200).send({ message: "Password Not Reset Successfully !!!" })
                }
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }
    }
}

export default Controller
