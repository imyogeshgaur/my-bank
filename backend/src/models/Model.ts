import { DataTypes, Sequelize } from "sequelize"
import EnvironmentVariables from "../constants/Environments"

const sequelize = new Sequelize(EnvironmentVariables.DATABASE_URI as string)

namespace Models {

    export const Customer = sequelize.define('Customer', {
        customerId: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        nameOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userNameOfCustomer: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        passwordOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aadharOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        panOfCustomer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountNumberOfCustomer: {
            type: DataTypes.BIGINT,
            unique: true,
            allowNull: false
        },
        balanceOfCustomer: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    })

    export const Loan = sequelize.define("Loan", {
        loanId: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        incomeDataOfCustomer: {
            type: DataTypes.JSON,
            allowNull: false
        },
        nomineeDataOfCustomer: {
            type: DataTypes.JSON,
            allowNull: false
        },
        businessDataOfCustomer: {
            type: DataTypes.JSON,
            allowNull: false
        },
        landDetailsOfCustomer: {
            type: DataTypes.JSON,
            allowNull: false
        }
    })

    export const Admin = sequelize.define('Admin', {
        adminId: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        fullNameOfAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailOfAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userNameOfAdmin: {
            type: DataTypes.STRING,
        },
        passwordOfAdmin: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Admin.hasMany(Customer, { foreignKey: "adminId" })
    Customer.hasMany(Loan, { foreignKey: "customerId" })

    sequelize.sync()
}

export default Models;