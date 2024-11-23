import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";


const ExamType = sequelize.define(
    "ExamType",
    {
        examTypeId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        ExamType: {
            type: DataTypes.ENUM("Midterm", "Final", "Quiz"),
            allowNull: false,

        },
    }, {
    timestamps: true
}
)
export { ExamType }