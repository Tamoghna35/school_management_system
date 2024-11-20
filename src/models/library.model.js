import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Library = sequelize.define('Library', {
    libraryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true, // Automatically incrementing ID
    },
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures the field is mandatory
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures the field is mandatory
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures the field is mandatory
        unique: true, // Ensures each book's ISBN is unique
    },
    quantity: {
        type: DataTypes.UUID,
        allowNull: false, // Ensures the field is mandatory
        defaultValue: 0, // Default quantity is 0
        validate: {
            min: 0, // Ensures quantity cannot be negative
        },
    },
}, {

    timestamps: true, // Disables createdAt and updatedAt fields
});

export { Library };
