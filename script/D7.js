/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo
   e mostrala con un console.log().
*/
const concatenamento = (stringa1, stringa2) => {
  const s1Sclided = stringa1.slice(0, 2);
  const s2Sliced = stringa2.slice(stringa2.length - 3);
  const stringa = (s1Sclided + s2Sliced).toUpperCase();
  return stringa;
};
console.log(concatenamento("Ciao", "Mondo"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; 
  ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const getRandom = () => Math.ceil(Math.random() * 100);
console.log(getRandom());
const newArrayNumber = [];
const getArrayNumber = () => {
  for (let i = 0; i < 10; i++) {
    newArrayNumber.push(getRandom());
  }
};
getArrayNumber();
console.log(newArrayNumber);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array 
  composto da soli valori numerici
*/
const arrayNumber = [10, 67, 43, 6, 51, 70];
console.log(arrayNumber);
const getEvenArray = () => {
  return arrayNumber.filter((numero) => numero % 2 === 0);
};
console.log(getEvenArray());

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const anotherArrayNumber = [1, 44, 7, 56];
const getAnotherArray = () => {
  let somma = 0;
  // anotherArrayNumber.forEach((numero) => {
  //   somma += numero;
  // });
  anotherArrayNumber.forEach((numero) => (somma += numero));
  return somma;
};
console.log(getAnotherArray());

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const numerini = [3, 5, 2];
const sommiamoNumerini = () => {
  let somma = 0;
  let numero = numerini.reduce((somma, num) => {
    return somma + num;
  });
  return numero;
};
console.log(sommiamoNumerini());

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri,
   ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const arrNum = [34, 66, 3, 27];
const newArr = (n) => {
  const arrNum2 = arrNum.map((num) => {
    return num + n;
  });
  return arrNum2;
};
console.log(newArr(2));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, 
  ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array
   di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const arrString = [
  "Gianfrancioschio",
  "è",
  "fantasmagoricamente",
  "fantasmagorico",
];
const letterToNum = () => {
  const lunghezza = arrString.map((stringa) => stringa.length);
  return lunghezza;
};
console.log(letterToNum());

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const oddNum = [];
const getOddArray = () => {
  for (let i = 0; i < 99; i++) {
    if (i % 2 !== 0) {
      oddNum.push(i);
    }
  }
  return oddNum;
};
console.log(getOddArray());

/* Questo array di film verrà usato negli esercizi a seguire.
 Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
let filmPiuVecchio = null;
const trovaFilmVecchio = () => {
  movies.forEach((film) => {
    if (filmPiuVecchio === null || film.Year < filmPiuVecchio.Year) {
      filmPiuVecchio = film;
    }
  });
  return filmPiuVecchio;
};
console.log(trovaFilmVecchio());

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
const quantiFilm = () => {
  let i = 0;
  movies.forEach(() => {
    i++;
  });
  return i;
};
console.log(quantiFilm());

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti 
  nell'array fornito.
*/
const listaTitoli = () => {
  const arrFilm = movies.map((film) => {
    return film.Title;
  });
  return arrFilm;
};
console.log(listaTitoli());

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film
   usciti nel millennio corrente.
*/
const filmNuovi = movies.filter((film) => {
  if (film.Year <= "2000") {
    return false;
  } else {
    return true;
  }
});
console.log(filmNuovi);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti
   i film contenuti nell'array fornito.
*/
const sommaAnnoFilm = () => {
  let anniTot = movies.reduce((acc, curr) => {
    return acc + parseInt(curr.Year);
  }, 0);
  return anniTot;
};
console.log(sommaAnnoFilm());

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film
   (la funzione riceve un imdbID come parametro).
*/
const trovaFilm = (imdbID) => {
  const filmTrovato = movies.find((film) => film.imdbID === imdbID);
  return filmTrovato;
};
console.log(trovaFilm("tt0848228"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito 
  nell'anno fornito come parametro.
*/
const getIndexByYear = function (array, year) {
  const index = movies.findIndex((elem) => parseInt(elem.Year) === year);
  return index;
};
console.log(getIndexByYear(movies, 2012));
