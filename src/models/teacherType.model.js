import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";

const TeacherType = sequelize.define('TeacherType', {
    teacherTypeId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true, // Automatically incrementing ID
    },
    typeName: {
        type: DataTypes.ENUM('PartTime', 'FullTime'),

    },
}, {
    timestamps: true
});

export  {TeacherType};