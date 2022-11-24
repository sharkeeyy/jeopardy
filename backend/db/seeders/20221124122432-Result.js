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
   const results = [
    {
      user_id: 1,
      points: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      points: 2100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      points: 3000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      points: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      points: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ];

   await queryInterface.bulkInsert('Results', results);
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
