import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Teacher } from "./teacher.model.js";
import { Grade } from "./grade.model.js";

const Classroom = sequelize.define(
    "Classroom",
    {
        clasroomId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:DataTypes.UUIDV4,
        },
        classroomName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        gradeId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Grade,
                key:"gradeId"
            }
        },
        teacherId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Teacher,
                key:"teacherId"
            }
        }
    },
    {
        timestamps:true
    }
)
export{Classroom}