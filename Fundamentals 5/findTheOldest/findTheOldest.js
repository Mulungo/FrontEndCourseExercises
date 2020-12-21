let findTheOldest = function() { 
    const people = [
        {
          name: 'Carly',
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: 'Ray',
          yearOfBirth: 1962,
          yearOfDeath: 2011
        },
        {
          name: 'Jane',
          yearOfBirth: 1912,
          yearOfDeath: 1941
        },
      ]
    const oldest = people.reduce((a, b) => {
        return (b.yearOfBirth > a.yearOfBirth ? a : b);
    }, 0);
    return oldest;
}

module.exports = findTheOldest

