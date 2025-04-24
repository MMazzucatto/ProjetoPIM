import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Resposta = sequelize.define(
  "Resposta",
  {
    idResposta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idRelato: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Relato",
        key: "idRelato",
      },
    },
    idResponsavel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Responsavel",
        key: "idResponsavel",
      },
    },
    mensagem: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    tableName: "Resposta",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Resposta
