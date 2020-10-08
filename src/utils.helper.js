const {getRandomWordSync, getRandomWord} = require('word-maker');

const fizzBuzzHelper = (number) => {
    const helperObject = {
        isMultiples: true,
        word: null
    };
    if(number%3 === 0 && number%5 === 0){
        return {
            ...helperObject,
            word: 'FizzBuzz'
        };
    }
    if(number%3 === 0){
        return {
            ...helperObject,
            word: 'Fizz'
        };
    }
    if(number%5 === 0){
        return {
            ...helperObject,
            word: 'Buzz'
        };
    }
    return {
        ...helperObject,
        isMultiples: false
    };
}

exports.wordFizzBuzz = (number, withErrors) => {
    const {isMultiples, word} = fizzBuzzHelper(number);
    if(!isMultiples){
        return getRandomWordSync({withErrors});
    }
    return word;
}

exports.wordFizzBuzzAsync = async (number, withErrors) => {
    const {isMultiples, word} = fizzBuzzHelper(number);
    if(!isMultiples){
        return await getRandomWord({slow: true, withErrors});
    }
    return word;
}

exports.staticArray = () => new Array(100).fill(null);