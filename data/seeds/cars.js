exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: '123456788',
          make: 'Mercedes',
          model: 'CL-250',
          mileage: '20000',
          transmission: 1,
          status: 'salvage',
        },
        {
          id: 2,
          VIN: '123456789',
          make: 'BMW',
          model: 'M5',
          mileage: '20000',
          transmission: 1,
          status: 'salvage',
        },
        {
          id: 3,
          VIN: '123456787',
          make: 'Hundai',
          model: 'buy-a-car',
          mileage: '20000',
          transmission: 1,
          status: 'salvage',
        },
      ]);
    });
};
