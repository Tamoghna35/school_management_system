import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";
import { Library } from "./library.model.js";

const BorrowedBooks = sequelize.define('BorrowedBooks', {
    borrowBookId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    studentId: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Student, // Table name for Students
            key: 'student_id',  // Primary key in the Students table
        },
        onUpdate: 'CASCADE', // Update StudentID in BorrowedBooks if it changes in Students
        onDelete: 'CASCADE', // Delete the borrowed record if the related student is deleted
    },
    libraryId: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        references: {
            model: Library, // Table name for Library
            key: 'libraryId',  // Primary key in the Library table
        },
        onUpdate: 'CASCADE', // Update LibraryID in BorrowedBooks if it changes in Library
        onDelete: 'CASCADE', // Delete the borrowed record if the related book is deleted
    },
    borrowDate: {
        type: DataTypes.DATE,
        allowNull: false, // Ensures the field is mandatory
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true, // Allows the return date to be null until the book is returned
    },
}, {

    timestamps: false, // Disables createdAt and updatedAt fields
});

export { BorrowedBooks };
