

namespace DTO{
    
    export interface Personal<T>{
        nameOfCustomer:T | null;
        emailOfCustomer:T | null;
        phoneOfCustomer:number | null;
        userNameOfCustomer:T | null;
        passwordOfCustomer:T | null;
        aadharOfCustomer:T | null;
        panOfCustomer:T | null;
        accountNumberOfCustomer:number | null;
        balanceOfCustomer: number | null;
    }

    export interface Loan<T>{
        incomeDataOfCustomer:object | null;
        nomineeDataOfCustomer:object | null;
        businessDataOfCustomer:object | null;
        landDetailsOfCustomer: object | null;
    }
}