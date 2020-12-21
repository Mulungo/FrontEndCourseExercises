const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ];
    const titles = books.map(getTitle => `${getTitle.title}`);
    return titles;
}

module.exports = getTheTitles;
