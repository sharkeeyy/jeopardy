'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const users = [
    {
      name: 'Dima',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Vasiliy',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ];
   await queryInterface.bulkInsert('Users', users);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
