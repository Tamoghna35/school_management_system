import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Department } from "./department.model.js";
import { TeacherType } from "./teacherType.model.js";
const Teacher = sequelize.define(
    "Teacher",
    {
        teacherId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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
        role: {
            type: DataTypes.ENUM('Teacher', 'Student', 'Parent'),
            allowNull: false,
            defaultValue: 'Teacher', // Default for the teacher model
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