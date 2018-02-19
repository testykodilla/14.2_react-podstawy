var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        plakat: "https://images-na.ssl-images-amazon.com/images/I/71pN7LlOKTL._SY686_.jpg"
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        plakat: "https://img1.etsystatic.com/119/0/12075072/il_570xN.934228597_2b8d.jpg"
    },
    {
        id: 3,
        title: 'Pan Wołodyjowski',
        desc: 'Film o Panu Wołodyjowskim',
        plakat: "http://i.iplsc.com/michal-zebrowski/0001ZIWPSYGCCPJK-C122-F4.jpg"
    },
    {
        id: 4,
        title: 'Wall-E',
        desc: 'Film o Robocie',
        plakat: "https://images-na.ssl-images-amazon.com/images/I/51RoZRgIHtL.jpg"
    }    
  ];

var elementyFilmow = movies.map(function(film) {
    return React.createElement('li', {key: film.id},
        React.createElement('h2', {}, film.title),
        React.createElement('p', {}, film.desc),
        React.createElement('img', {src: film.plakat})
    );});

var element =
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, elementyFilmow)
);

ReactDOM.render(element, document.getElementById('app'));