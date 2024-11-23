import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Exam } from "./exam.model.js";
import { Student } from "./student.model.js";

const ExamScore = sequelize.define('ExamScore', {
    examScoreId: {
        type: DataTypes.UUID,
        primaryKey: true,
        // autoIncrement: true, // Automatically incrementing ID
        defaultValue: DataTypes.UUIDV4
    },
    examId: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Exam, // Table name for Exams
            key: 'examId',  // Primary key in the Exams table
        },
        onUpdate: 'CASCADE', // Update ExamID in ExamScores if it changes in Exams
        onDelete: 'CASCADE', // Delete the exam score if the related exam is deleted
    },
    StudentID: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Student, // Table name for Students
            key: 'student_id',  // Primary key in the Students table
        },
        onUpdate: 'CASCADE', // Update StudentID in ExamScores if it changes in Students
        onDelete: 'CASCADE', // Delete the exam score if the related student is deleted
    },
    Score: {
        type: DataTypes.FLOAT,
        allowNull: false, // Ensures the field is mandatory
        validate: {
            min: 0,  // Ensure the score is not negative
        },
    },
}, {
    timestamps: true, // Disables createdAt and updatedAt fields
});

export { ExamScore };
