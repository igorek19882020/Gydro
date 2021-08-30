


// 'use strict';


// let numderOfFilms;

// function start() {
//     numderOfFilms = +prompt("how many films did you see", '');
//     while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)) {
//         numderOfFilms = +prompt("how many films did you see", '');

//     }
// }
// start();


// let personalMovieDB = {
//     count: numderOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };






// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Один из последних просмотренных фильмов?", '');
//         let c = prompt("На сколько оцените его?", '');
//         personalMovieDB.movies[a] = c;
//         if (a != null && c != null && a != '' && c != '' && a.length < 50) {
//             personalMovieDB.movies[a] = c;
//             console.log('done');
//         }
//         else {
//             console.log('error');
//             i--;
//         }
//     }

// }
// rememberMyFilms();



// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено мало фильмов')
//     }

//     if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель')
//     }
//     if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман')
//     }

// }
//  detectPersonalLevel();


// function showMyDB(){
//    if( personalMovieDB.privat==false){
//        console.log(personalMovieDB);
//    }
// }
// showMyDB();
// function writeYoyrGenres(){
//     for(let i=1;i<=3;i++){
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
// writeYoyrGenres();

// function first() {
//     //do smth
//     setTimeout(function () { console.log(1); }, 500);
// }


// function second() {
//     console.log(2)
// }
// first();
// second();

// function learnJS(lang,callback){
//     console.log(`i learn:${lang}`);
//     callback();
// }
// function done(){
//     console.log('I learned this lesson!')
// }
// learnJS('JS',done);
// !!!!!!!!!!!!!!!!!!!!!!!!
// const opt = {
//     name:'test',
//     width:1024,
//     height:1024,
//     colors:{
//         border:'black',
//         bg:'red'

//     },
//     makeTest:function(){
//         console.log("test")
//     }

// };
// opt.makeTest();
// console.log(Object.keys(opt))
