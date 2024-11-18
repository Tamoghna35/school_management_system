import { sequelize } from "../db/index.js";
import { DataTypes, UUIDV4 } from "sequelize";

const Teacher = sequelize.define(
    "Teacher",
    {
        teacherId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        teacherFirstName: {
            type: DataTypes.STRING,
            allowNull: false, // Ensuring this field is mandatory
        },
        teacherLastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacherDateOfBirth: {
            type: DataTypes.DATEONLY, // Stores only the date (no time)
            allowNull: false,
        },
        teacherGender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'), // Defining gender options as an ENUM
            allowNull: false,
        },
        teacherAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacherPhoneNumber: {
            type: DataTypes.STRING, // Phone numbers can contain special characters (e.g., +, -, parentheses)
            allowNull: false,
            validate: {
                is: /^[0-9\-+() ]*$/i, // Validation to allow only valid phone number characters
            },
        },
        teacherEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensuring email is unique
            validate: {
                isEmail: true, // Basic email validation
            },
        },
        departmentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Department,
                key: "departmentId"
            }
        },
        teacherTypeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: TeacherType, // Name of the referenced model/table
                key: 'teacherTypeId',  // Column name in the referenced table
            },
        }
    },
    {
        timestamps: true
    }
)
export { Teacher }