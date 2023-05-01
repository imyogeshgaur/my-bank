

namespace DTO {

    export interface Personal<T> {
        nameOfCustomer: T | null;
        emailOfCustomer: T | null;
        phoneOfCustomer: number | null;
        userNameOfCustomer: T | null;
        passwordOfCustomer: T | null;
        aadharOfCustomer: T | null;
        panOfCustomer: T | null;
        adminId: T | null;
        accountNumberOfCustomer: number | null;
        balanceOfCustomer: number | null;
    }

    export interface Admin<T> {
        fullNameOfAdmin: T | null;
        emailOfAdmin: T | null;
        userNameOfAdmin: T | null;
        passwordOfAdmin: T | null;
    }

    export interface Loan<T> {
        incomeDataOfCustomer: T | null;
        nomineeDataOfCustomer: T | null;
        businessDataOfCustomer: T | null;
        landDetailsOfCustomer: T | null;
        loanAmount: Number | null;
        loanTimePeriod: Number | null;
        loanInterestRate: Number | null;
    }

    export interface Login<T> {
        email: T | null;
        password: T | null;
        role: T | null;
    }

    export interface ForgetPassword<T> {
        email: T | null;
        role: T | null;
    }

    export interface ResetPassword<T> {
        email: T | null;
        role: T | null;
    }
}

export default DTO;