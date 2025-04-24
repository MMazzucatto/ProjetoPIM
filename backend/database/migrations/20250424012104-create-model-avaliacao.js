"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Avaliacao", {
      idAvaliacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idRelato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Relato",
          key: "idRelato",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Avaliacao")
  },
}
