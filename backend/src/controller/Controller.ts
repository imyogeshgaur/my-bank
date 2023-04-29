import { Request, Response } from "express"
import Service from "../service/Service"

namespace Controller{
    export class UserController{        
        
        private request:Request;
        private response:Response;
        private service:Service.UserService<string>;

        constructor(req:Request,res:Response) {
            this.request = req;
            this.response = res;
            this.service = new Service.UserService<string>();
        }

        async getPersonalDetails(){
            
        }

        async getLoanDetails(){

        }

        async getAccountDetails(){

        }

        async applyForAccount(){

        }

        async applyForCard(){

        }

        async applyForLoan(){

        }
    }
}

export default Controller
