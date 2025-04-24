"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tarefa", {
      idTarefa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      prazo: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      idFuncionario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Funcionario",
          key: "idFuncionario",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Tarefa")
  },
}
