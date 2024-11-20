import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";
import { Course } from "./course.model.js";
const Enrollment = sequelize.define(
    "Enrollment",
    {
        enrollmentId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        enrollmentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        stydentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Student,
                key: "student_id"
            }
        },
        courseId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Course,
                key: "courseId"
            }
        }
    },
    {
        timestamps: true
    }
)
export{Enrollment}