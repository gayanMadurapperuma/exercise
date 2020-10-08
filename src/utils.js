const { getRandomWordSync, getRandomWord } = require('word-maker');
const {wordFizzBuzz, staticArray, wordFizzBuzzAsync} = require('./utils.helper');

const randomWordSync = (withErrors = false) => {
    return Array.from(new Array(100), (val, i) => {
        const wordIndex = ++i;
        try {
            return `${wordIndex}: ${getRandomWordSync({withErrors})}`
        } catch (error) {
            return `${wordIndex} It shouldn't break anything!`;
        }
    });
}

const fizzBuzzRandomWordSync = (withErrors = false) => {
    return Array.from(new Array(100), (val, i) => {
        const wordIndex = ++i
        try {
            return `${wordIndex}: ${wordFizzBuzz(wordIndex, withErrors)}`
        } catch (error) {
            return `${wordIndex} It shouldn't break anything!`;
        }
    });
}

const randomWordAsync = async (withErrors = false) => {
    const wordArray = staticArray().map(async (e, i) => {
        const wordIndex = ++i;
        return `${wordIndex}: ${await getRandomWord({ slow: true , withErrors}).catch(() => {return `It shouldn't break anything!`})}`;
    });

    return await Promise.all(wordArray);;
};

const fizzBuzzRandomWordAsync = async (withErrors = false) => {
    const wordArray = staticArray().map(async (e, i) => {
        const wordIndex = ++i;
        return `${wordIndex}: ${await wordFizzBuzzAsync(wordIndex, withErrors).catch(() => {return `It shouldn't break anything!`})}`;
    })
    return await Promise.all(wordArray);
}

module.exports = {randomWordSync, fizzBuzzRandomWordSync, randomWordAsync, fizzBuzzRandomWordAsync}