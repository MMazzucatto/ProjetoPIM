import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Status = sequelize.define(
  "Status",
  {
    idStatus: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tabela: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "Status",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Status
