import { sequelize } from "../../database.js"
import { DataTypes } from "sequelize"

const Responsavel = sequelize.define(
  "Responsavel",
  {
    idResponsavel: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    tableName: "Responsavel",
    timestamps: true,
    freezeTableName: true,
  }
)
export default Responsavel
