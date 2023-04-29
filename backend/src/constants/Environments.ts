import { resolve, join } from 'path'
import { config } from 'dotenv'
config({ path: resolve("backend/src/.env") })

namespace EnvironmentVariables {
    export const DATABASE_URI = process.env.DATABASE_URI;
    export const JWT_SECRET = process.env.JWT_SECRET;
    export const MAIL_HOST = process.env.MAIL_HOST;
    export const MAIL_ID = process.env.MAIL_ID;
    export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
    export const IMAGE_STORAGE_LOCATION = process.env.IMAGE_STORAGE_LOCATION;
    export const IMAGE_STATIC_URL = process.env.IMAGE_STATIC_URL;
    export const FRONTEND_URL = process.env.FRONTEND_URL;

}

export default EnvironmentVariables;