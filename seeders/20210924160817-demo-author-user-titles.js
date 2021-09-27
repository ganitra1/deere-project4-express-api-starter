"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let authors = await queryInterface.bulkInsert("Authors", [
      { name: "Stephen King" },
      { name: "Tom Clancy" },
    ]);

    let titles = await queryInterface.bulkInsert("Titles", [
      { title: "It", authorId: 7 },
      { title: "The Hunt for Red October", authorId: 8 },
    ]);

    let users = await queryInterface.bulkInsert("Users", [
      { name: "Anitra" },
      { name: "Heather" },
    ]);

    let userArtists = await queryInterface.bulkInsert("UserAuthors", [
      { userId: 7, authorId: 11 },
      { userId: 8, authorId: 12},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserAuthors',null,{});
    await queryInterface.bulkDelete('Users',null,{});
    await queryInterface.bulkDelete('Titles',null,{});
    await queryInterface.bulkDelete('Authors',null,{});
  }
};
