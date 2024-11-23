import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";
import { Exam } from "./exam.model.js";



const ExamResult = sequelize.define(
    'ExamResult',
    {
        examResultId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        StudentID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Student, // Table name for Students
                key: 'student_id',  // Primary key in Students table
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        ExamID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Exam,   // Table name for Exams
                key: 'examId',    // Primary key in Exams table
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        Score: {
            type: DataTypes.FLOAT, // Allowing decimal scores (e.g., 95.5)
            allowNull: false,
            validate: {
                min: 0, // Ensures score is non-negative
                max: 100, // Assuming a max score of 100
            },
        },
    }, {

    timestamps: false,        // Disable createdAt and updatedAt
});

export {ExamResult}
