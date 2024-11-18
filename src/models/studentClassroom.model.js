import { sequelize } from "../db/index.js";
import { DataTypes } from "sequelize";
import { Student } from "./student.model.js";
import { Teacher } from "./teacher.model.js";

const StudentClassRoom = sequelize.define(
    "StudentClassRoom",
    {
        studentClassRoomId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4

        },
        enrollmentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        teacherId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Teacher,
                key: "teacherId"
            }
        },
        studentId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Student,
                key: "student_id"
            }
        },
        classRommId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Classroom,
                key: "classroomId"
            }
        }
    },
    {
        timestamps: true
    }
)
export { StudentClassRoom }