import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Course } from "./course.model.js";

const Assignment = sequelize.define('Assignment', {
    assignmentId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true, // Automatically incrementing ID
    },
    assignmentName: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures the field is mandatory
    },
    courseId: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Course,// Table name for Courses
            key: 'courseId',  // Primary key in the Courses table
        },
        onUpdate: 'CASCADE', // Update CourseID in Assignments if it changes in Courses
        onDelete: 'CASCADE', // Delete the assignment if the related course is deleted
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false, // Ensures the field is mandatory
    },
}, {

    timestamps: true, // Disables createdAt and updatedAt fields
});

export { Assignment };
