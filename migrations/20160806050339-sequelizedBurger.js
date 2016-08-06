'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:*/
      return queryInterface.bulkInsert('burgers', [
      {burger_name: 'Austin Burger',
       devoured: false,
      },
      {burger_name: 'Cowboy Burger',
      devoured: false,
      },
      {burger_name: 'Californian Burger',
      devoured: false,
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:*/
      return queryInterface.bulkDelete('burgers', null, {});
  }
};