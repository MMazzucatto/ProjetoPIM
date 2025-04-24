import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Relato = sequelize.define(
  "Relato",
  {
    idRelato: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "idUsuario",
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
    idStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Status",
        key: "idStatus",
      },
    },
    descricao: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    dataStatus: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dataFechamento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "Relato",
    timestamps: true,
    freezeTableName: true,
  }
)

export default Relato
