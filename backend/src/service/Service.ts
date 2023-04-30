import { compare, hash } from "bcryptjs";
import { v1 } from "uuid";
import DTO from "../interface/DTO";
import Models from "../models/Model"
import Utility from "../utility/Utilty";
import { sign } from "jsonwebtoken";
import EnvironmentVariables from "../constants/Environments";
import Helper from "../helpers/Helper";

namespace Service {

    export class UserService<T>{

        private customer;
        private loan;
        private admin;
        constructor() {
            this.customer = Models.Customer;
            this.loan = Models.Loan;
            this.admin = Models.Admin;
        }

        async getPersonalDetails() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }

        async getLoanDetails() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }

        async getAccountDetails() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }

        async applyForAccount() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }

        async applyForCard() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }

        async applyForLoan() {
            try {

            } catch (error) {
                console.log(`User's Service Error : ${error}`)
            }
        }
    }

    export class AdminService<T>{

        private customer;
        private loan;
        private admin;
        constructor() {
            this.customer = Models.Customer;
            this.loan = Models.Loan;
            this.admin = Models.Admin;
        }

        async signUpAdmin(data: DTO.Admin<string>) {
            try {
                const adminId = v1();
                const passwordOfAdmin = await hash(data.passwordOfAdmin as string, 12);
                const newAdmin = await this.admin.create({
                    adminId,
                    ...data,
                    passwordOfAdmin
                })
                const savedAdmin = await newAdmin.save();
                return savedAdmin;
            } catch (error) {
                console.log(`Auth's Service Error : ${error}`)
            }
        }
        async signUpUser(data: DTO.Personal<string>) {
            try {
                const customerId = v1();
                const passwordOfCustomer = await hash(data.passwordOfCustomer as string, 12);
                const accountNumberOfCustomer: number = Number.parseInt(Utility.createAccountNumber());
                const newCustomer = await this.customer.create({
                    customerId,
                    ...data,
                    passwordOfCustomer,
                    accountNumberOfCustomer
                })
                const savedCustomer = await newCustomer.save();
                return savedCustomer;
            } catch (error) {
                console.log(`Auth's Service Error : ${error}`)
            }
        }

        async getAllCustomersDetail(id: string) {
            try {
                const adminData = await this.admin.findAll({
                    where: {
                        adminId: id
                    },
                    include: [
                        {
                            model: this.customer,
                        }
                    ]
                })
                return adminData;

            } catch (error) {
                console.log(`Admin's Service Error : ${error}`)
            }
        }

        async changePersonalDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Service Error : ${error}`)
            }
        }

        async changeLoanDetailOfCustomer() {
            try {

            } catch (error) {
                console.log(`Admin's Service Error : ${error}`)
            }
        }

        async changeAccountDetails() {
            try {

            } catch (error) {
                console.log(`Admin's Service Error : ${error}`)
            }
        }

        async deleteCustomerData() {
            try {

            } catch (error) {
                console.log(`Admin's Service Error : ${error}`)
            }
        }

    }

    export class AuthService<T>{

        private customer;
        private admin;
        constructor() {
            this.customer = Models.Customer;
            this.admin = Models.Admin;
        }

        async loginUser(data: DTO.Login<string>) {
            try {
                const { email, password, role } = data;
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                if (regex.test(email as string)) {
                    if (role == "Admin") {
                        const findAdminByEmail: any = await this.admin.findOne({
                            where: {
                                emailOfAdmin: email
                            }
                        })
                        if (findAdminByEmail) {
                            const matched = await compare(password as string, findAdminByEmail.passwordOfAdmin)
                            if (matched) {
                                const token: any = sign(
                                    {
                                        userId: findAdminByEmail.adminId as string
                                    },
                                    EnvironmentVariables.JWT_SECRET as string
                                )
                                return token;
                            } else {
                                return 0;
                            }
                        } else {
                            return -1;
                        }
                    } else {
                        const findCustomerByEmail: any = await this.customer.findOne({
                            where: {
                                emailOfCustomer: email
                            }
                        })
                        if (findCustomerByEmail) {
                            const matched = await compare(password as string, findCustomerByEmail.passwordOfCustomer)
                            if (matched) {
                                const token: any = sign(
                                    {
                                        userId: findCustomerByEmail.customerId as string
                                    },
                                    EnvironmentVariables.JWT_SECRET as string
                                )
                                return token;
                            } else {
                                return 0;
                            }
                        } else {
                            return -1;
                        }
                    }
                } else {
                    if (role == "Admin") {
                        const findAdminByEmail: any = await this.admin.findOne({
                            where: {
                                userNameOfAdmin: email
                            }
                        })
                        if (findAdminByEmail) {
                            const matched = await compare(password as string, findAdminByEmail.passwordOfAdmin)
                            if (matched) {
                                const token: any = sign(
                                    {
                                        userId: findAdminByEmail.adminId as string
                                    },
                                    EnvironmentVariables.JWT_SECRET as string
                                )
                                return token;
                            } else {
                                return 0;
                            }
                        } else {
                            return -1;
                        }
                    } else {
                        const findCustomerByEmail: any = await this.customer.findOne({
                            where: {
                                userNameOfCustomer: email
                            }
                        })
                        if (findCustomerByEmail) {
                            const matched = await compare(password as string, findCustomerByEmail.passwordOfCustomer)
                            if (matched) {
                                const token: any = sign(
                                    {
                                        userId: findCustomerByEmail.customerId as string
                                    },
                                    EnvironmentVariables.JWT_SECRET as string
                                )
                                return token;
                            } else {
                                return 0;
                            }
                        } else {
                            return -1;
                        }
                    }
                }
            } catch (error) {
                console.log(`Auth's Service Error : ${error}`)
            }
        }

        async forgetPasswordForUser(data: DTO.ForgetPassword<string>) {
            try {
                const { email, role } = data;
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                if (regex.test(email as string)) {
                    if (role == "Admin") {
                        const findAdminByEmail: any = await this.admin.findOne({
                            where: {
                                emailOfAdmin: email
                            }
                        })
                        if (findAdminByEmail) {
                            const message = Helper.forgetPasswordMail(
                                email as string,
                                findAdminByEmail.userNameOfAdmin as string | "User",
                                findAdminByEmail.adminId
                            );
                            return message;
                        } else {
                            return 0;
                        }
                    } else {
                        const findCustomerByEmail: any = await this.customer.findOne({
                            where: {
                                emailOfCustomer: email
                            }
                        })
                        if (findCustomerByEmail) {
                            const message = Helper.forgetPasswordMail(
                                email as string,
                                findCustomerByEmail.userNameOfAdmin as string | "User",
                                findCustomerByEmail.customerId
                            );
                            return message;
                        } else {
                            return 0;
                        }
                    }
                } else {
                    if (role == "Admin") {
                        const findAdminByUserName: any = await this.admin.findOne({
                            where: {
                                userNameOfAdmin: email
                            }
                        })
                        if (findAdminByUserName) {
                            const message = Helper.forgetPasswordMail(
                                findAdminByUserName.emailOfAdmin as string,
                                email as string,
                                findAdminByUserName.adminId
                            );
                            return message;
                        } else {
                            return 0;
                        }
                    } else {
                        const findCustomerByUserName: any = await this.customer.findOne({
                            where: {
                                userNameOfCustomer: email
                            }
                        })
                        if (findCustomerByUserName) {
                            const message = Helper.forgetPasswordMail(
                                findCustomerByUserName.emailOfCustomer as string,
                                email as string,
                                findCustomerByUserName.adminId
                            );
                            return message;
                        } else {
                            return 0;
                        }
                    }
                }
            } catch (error) {
                console.log(`Auth's Service Error : ${error}`)
            }
        }

        async resetPasswordForUser(token: any, password: string) {
            try {
                const userId = Helper.decodeOnlineUsers(token);
                const newPassword = await hash(password, 12);
                const isAdminNeedToUpdatePassword: any = await this.admin.findOne({
                    where: {
                        adminId: userId
                    }
                })
                if (isAdminNeedToUpdatePassword) {
                    const adminNeedToUpdatePassword: any = await this.admin.update({
                        passwordOfAdmin: newPassword,
                    }, {
                        where: {
                            adminId: userId
                        }
                    });
                    return adminNeedToUpdatePassword;
                } else {
                    const customerNeedToUpdatePassword: any = await this.customer.update({
                        passwordOfCustomer: newPassword,
                    }, {
                        where: {
                            customerId: userId
                        }
                    });
                    return customerNeedToUpdatePassword;
                }
            } catch (error) {
                console.log(`Auth's Service Error : ${error}`)
            }
        }
    }
}

export default Service