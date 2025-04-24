import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Tarefa = sequelize.define(
  "Tarefa",
  {
    idTarefa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idFuncionario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Funcionario",
        key: "idFuncionario",
      },
    },
    idRelato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Relato",
        key: "idRelato",
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    idStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Status",
        key: "idStatus",
      },
    },
    dataInicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dataFim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "Tarefa",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Tarefa
