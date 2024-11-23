import {sequelize} from "../db/index.js";
import { DataTypes } from "sequelize";

const Parent = sequelize.define(
    "Parent",
    {
        parent_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true, // Ensures valid email format
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('Teacher', 'Student', 'Parent'),
            allowNull: false,
            defaultValue: 'Parent', // Default for the parent model
        },
        dob: {
            type: DataTypes.DATEONLY, // Use DATEONLY if only the date is needed without time
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true, // Ensures only numbers are allowed
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true, // Assuming new parents are active by default
        },
        last_login_date: {
            type: DataTypes.DATE,
            allowNull: true, // This can be nullable initially
        }
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields automatically
    }
);

export { Parent };
