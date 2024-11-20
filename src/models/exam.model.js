import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Course } from "./course.model.js";

const Exam = sequelize.define(
    "Exam",
    {
        examId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: true,
            primaryKey: true
        },
        examName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        courseId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Course,
                key: "courseId"
            }
        },
        examTypeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: ExamType,
                key: "examTypeId"
            }
        }
    }, {
    timestamps: true
}
)
export { Exam }