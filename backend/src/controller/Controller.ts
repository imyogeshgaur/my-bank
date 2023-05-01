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
                const token: any = this.req.headers.authorization;
                const user = await this.service.getPersonalDetails(token);
                return this.res.status(200).send({ user })
            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
            }
        }

        async getLoanDetails() {
            try {
                const token: any = this.req.headers.authorization;
                const loanData = await this.service.getLoanDetails(token);
                return this.res.status(200).send({ loanData })
            } catch (error) {
                console.log(`User's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })

            }
        }

        async applyForLoan() {
            try {
                const token: any = this.req.headers.authorization;
                const data: DTO.Loan<object> = this.req.body;
                const loan = await this.service.applyForLoan(data, token);
                return this.res.status(200).send({ loan });
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
                const token = this.req.headers.authorization;
                const adminData = await this.service.getAllCustomersDetail(token);
                return this.res.status(200).send(adminData);
            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async changePersonalDetailOfCustomer() {
            try {
                const userId: string = this.req.params.id;
                const data: DTO.Personal<string> = this.req.body;
                const isChanged: any = await this.service.changePersonalDetailOfCustomer(userId, data);
                if (isChanged[0]) {
                    return this.res.status(200).send({ message: "Personal Details Updated !!!" })
                } else {
                    return this.res.status(200).send({ message: "Personal Details not Updated !!!" })
                }
            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async changeLoanDetailOfCustomer() {
            try {
                const userId: string = this.req.params.id;
                const data: DTO.Loan<object> = this.req.body;
                const isChanged: any = await this.service.changeLoanDetailOfCustomer(userId, data);
                if (isChanged[0]) {
                    return this.res.status(200).send({ message: "Loan Details Updated !!!" })
                } else {
                    return this.res.status(200).send({ message: "Loan Details not Updated !!!" })
                }
            } catch (error) {
                console.log(`Admin's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }

        async deleteCustomerData() {
            try {
                const userId = this.req.params.id;
                const isDeleted: any = await this.service.deleteCustomerData(userId);
                if (!isDeleted[0]) {
                    return this.res.status(200).send({ message: "User Deleted Successfully !!!" })
                } else {
                    return this.res.status(200).send({ message: "User Not Deleted !!!" })
                }
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
                const userId: any = this.req.params.id;
                const password: string = await this.req.body.password;
                const isReset: Array<number> = await this.service.resetPasswordForUser(userId, password);
                if (isReset[0]) {
                    return this.res.status(200).send({ message: "Password Reset Successfully !!!" })
                } else {
                    return this.res.status(200).send({ message: "Password Not Reset !!!" })
                }
            } catch (error) {
                console.log(`Auth's Controller Error : ${error}`)
                return this.res.status(500).send({ message: "Internal Server Error !!!" })
            }
        }
    }
}

export default Controller
