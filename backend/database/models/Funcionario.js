import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Funcionario = sequelize.define(
  "Funcionario",
  {
    idFuncionario: {
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
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "Funcionario",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Funcionario
