import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Avaliacao = sequelize.define(
  "Avaliacao",
  {
    idAvaliacao: {
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
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "Avaliacao",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Avaliacao
