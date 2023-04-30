import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"
import EnvironmentVariables from "../constants/Environments";

namespace MiddleWare {
    export function authenticate(req:Request,res:Response,next:NextFunction){
        try {
            const token:any = req.headers.authorization;
            const isVerify = verify(token,EnvironmentVariables.JWT_SECRET as string);
            if(isVerify){
                next();
            }else{
                return res.status(400).send({message:"Not Authorized !!!"})
            }
        } catch (error) {
            console.log(`Middleware error : ${error}`)
            return res.status(500).send({message:"Internal Server Error !!!"})
        }
    }
}

export default MiddleWare