const {printEachValuesToLogger, resultsToHttp} = require('./helper');
const {randomWordSync, randomWordAsync, fizzBuzzRandomWordSync, fizzBuzzRandomWordAsync} = require('./utils');

console.log('It works!');

// YOUR CODE HERE

const randomSyncToHttp = async () => {
    const results = randomWordSync();
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Random word sync ========')]);
    return httpResults;
};

const randomFizzBuzzSyncToHttp = async () => {
    const results = fizzBuzzRandomWordSync();
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Fizz Buzz random word sync ========')]);
    return httpResults;
};

const randomAsyncToHttp = async () => {
    const results = await randomWordAsync();
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Random word Async ========')]);
    return httpResults;
};

const randomFizzBuzzAsyncToHttp = async () => {
    const results = await fizzBuzzRandomWordAsync();
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Fizz Buzz random word async ========')]);
    return httpResults;
};

const randomSyncToHttpWithError = async () => {
    const results = randomWordSync(true);
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Random word sync with Error ========')]);
    return httpResults;
};

const randomFizzBuzzSyncWithErrorToHttp = async () => {
    const results = fizzBuzzRandomWordSync(true);
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Fizz Buzz random word sync with Error ========')]);
    return httpResults;
};

const randomAsyncWithErrorToHttp = async () => {
    const results = await randomWordAsync(true);
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Random word Async with Error ========')]);
    return httpResults;
};

const randomFizzBuzzAsyncWithErrorToHttp = async () => {
    const results = await fizzBuzzRandomWordAsync(true);
    const [httpResults] = await Promise.all([resultsToHttp(results), printEachValuesToLogger(results, '===== Fizz Buzz random word async with Error ========')]);
    return httpResults;
};

const runAll = () => {
    randomSyncToHttp()
    randomFizzBuzzSyncToHttp();
    randomAsyncToHttp();
    randomFizzBuzzAsyncToHttp();
    randomSyncToHttpWithError();
    randomFizzBuzzSyncWithErrorToHttp();
    randomAsyncWithErrorToHttp()
    randomFizzBuzzAsyncWithErrorToHttp();
}

runAll();

module.exports = {
    randomSyncToHttp,
    randomFizzBuzzSyncToHttp,
    randomAsyncToHttp,
    randomFizzBuzzAsyncToHttp,
    randomSyncToHttpWithError,
    randomFizzBuzzSyncWithErrorToHttp,
    randomAsyncWithErrorToHttp,
    randomFizzBuzzAsyncWithErrorToHttp
}