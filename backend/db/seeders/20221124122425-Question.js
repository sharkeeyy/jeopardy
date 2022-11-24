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
    const questions = [
      {
        theme_id: 1,
        name: 'Question #1',
        answer: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        name: 'Question #2',
        answer: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        name: 'Question #3',
        answer: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        name: 'Question #4',
        answer: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 1,
        name: 'Question #5',
        answer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        name: 'Question #1',
        answer: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        name: 'Question #2',
        answer: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        name: 'Question #3',
        answer: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        name: 'Question #4',
        answer: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 2,
        name: 'Question #5',
        answer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        name: 'Question #1',
        answer: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        name: 'Question #2',
        answer: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        name: 'Question #3',
        answer: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        name: 'Question #4',
        answer: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: 3,
        name: 'Question #5',
        answer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Questions', questions);
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
