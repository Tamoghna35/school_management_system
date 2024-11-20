import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";

const Fee = sequelize.define(
    'Fees',
    {
    feeId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true, // Automatically incrementing ID
    },
    studentId: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Student, // Table name for Students
            key: 'student_id',  // Primary key in the Students table
        },
        onUpdate: 'CASCADE', // Update StudentID in Fees if it changes in Students
        onDelete: 'CASCADE', // Delete the fee record if the related student is deleted
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false, // Ensures the field is mandatory
        validate: {
            min: 0, // Ensures the fee amount is not negative
        },
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false, // Ensures the field is mandatory
    },
    paidDate: {
        type: DataTypes.DATE,
        allowNull: true, // Allows the paid date to be null if not paid yet
    },
}, {
   
    timestamps: true, // Disables createdAt and updatedAt fields
});

export  {Fee};
