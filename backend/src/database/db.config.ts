import { Sequelize } from 'sequelize'
import EnvironmentVariables from '../constants/Environments';

const sequelize = new Sequelize(EnvironmentVariables.DATABASE_URI as string)

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(`Error in Database Connection : ${error}`)
    }
}

export default connectToDatabase