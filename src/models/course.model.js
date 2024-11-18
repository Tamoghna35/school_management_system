import { sequelize } from "../db/index.js";
import { DataTypes, UUIDV4 } from "sequelize";
import { Teacher } from "./teacher.model.js";


const Course = sequelize.define(
    "Course",
    {
        courseId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        coursrName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacherId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Teacher,
                key: "teacherId"
            }
        },
        departmentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Department,
                key: "departmentId"
            }
        },
    },
    {
        timestamps: true
    }
)
export {Course}