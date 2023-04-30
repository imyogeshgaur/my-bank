import { decode } from 'jsonwebtoken'
import { createTransport } from 'nodemailer'
import EnvironmentVariables from '../constants/Environments'

const myTransport = createTransport({
    host: EnvironmentVariables.MAIL_HOST,
    port: 587,
    auth: {
        user: EnvironmentVariables.MAIL_ID,
        pass: EnvironmentVariables.MAIL_PASSWORD
    }
});

namespace Helper {

    export function decodeOnlineUsers(token: any) {
        try {
            const decodedVal: any = decode(token, { complete: true });
            return decodedVal?.payload.userId;
        } catch (error) {
            console.log('Decoding Error : ', error)
        }
    }

    export async function forgetPasswordMail(receiverMail: string,userName:string, uuid: string) {
        try {
            const info = await myTransport.sendMail({
                from: EnvironmentVariables.MAIL_ID,
                to: receiverMail,
                subject: "Password Reset Link",
                html: `
                <html>
                <head>
                </head>
                <body>
                    <p> Dear ${userName}, </p>   
                    <p>There was a request to change your password!
                    <br>
                    If you did not make this request then please ignore this email.
                    <br>
                    Otherwise, <a href="${EnvironmentVariables.FRONTEND_URL}/resetPassword/${uuid}">
                    Click Here</a> to Login !!!</p>
                    Thanks and Regards
                    <br>
                    Team MyBank
                </body>
                </html>
            `
            })
            console.log("Mail Send Successfully !!!")
            if (info.messageId) {
                return { message: "Check Mail For Login !!!" };
            } else {
                return { message: "Mail Not Send Successfully  !!!" };
            }
        } catch (error) {
            console.log(`Password Reset Helper's Error : ${error}`)
        }
    }
}

export default Helper;