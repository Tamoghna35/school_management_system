import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const Library = sequelize.define('Library', {
    libraryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        // autoIncrement: true, // Automatically incrementing ID
        defaultValue: DataTypes.UUIDV4
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
        defaultValue: DataTypes.UUIDV4, // Default to a generated UUID
        validate: {
            min: 0, // You may need to adjust this since UUIDs can't be negative
        },
    },

}, {

    timestamps: true, // Disables createdAt and updatedAt fields
});

export { Library };
