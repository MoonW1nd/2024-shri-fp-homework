import Api from '../tools/api';
import {__, allPass, andThen, assoc, compose, concat, gt, ifElse, length, lt, mathMod, otherwise, partial, prop, tap, test} from "ramda";

const api = new Api();

// Арифметические операции
const square = num => num ** 2;
const gtTwo = gt(__, 2);
const ltTen = lt(__, 10);

const thenSquare = andThen(square);

// Строки
const lengthGreaterThenTwo = compose(gtTwo, length);
const lengthLowerThenTen = compose(ltTen, length);
const testOnlyNumbers = test(/^[0-9]+\.?[0-9]+$/);
const roundStringToNumber = compose(Math.round, Number);
const modForThreeToString = compose(String, mathMod(__, 3));

const thenModOfThreeToString = andThen(modForThreeToString);
const thenGetLength = andThen(length);

// Функция валидации
const validate = allPass([lengthGreaterThenTwo, lengthLowerThenTen, testOnlyNumbers]);

// работа с API
const API_NUMBERS_URL = 'https://api.tech/numbers/base';
const API_ANIMALS_URL = 'https://animals.tech/';
const getApiResult = compose(String, prop('result'));

const assocNumberToBinary = assoc('number', __, { from: 10, to: 2 });

const apiGetNumberBinaryBase = compose(
    api.get(API_NUMBERS_URL),
    assocNumberToBinary
) ;

const thenGetApiResult = andThen(getApiResult);
const thenConcatToAnimalsUrl = andThen(concat(API_ANIMALS_URL));
const thenCallApiWithEmptyParams = andThen(api.get(__, {}));

const processSequence = ({value, writeLog, handleSuccess, handleError}) => {
    const tapLog = tap(writeLog);
    const thenTapLog = andThen(tapLog);
    const thenHandleSuccess = andThen(handleSuccess);
    const otherwiseHandleError = otherwise(handleError);

    const handleValidationError = partial(handleError, ['ValidationError']);

    const sequenceComposition = compose(
        otherwiseHandleError,
        thenHandleSuccess, // 9
        thenGetApiResult, // 8
        thenCallApiWithEmptyParams,
        thenConcatToAnimalsUrl,
        thenTapLog, // 7
        thenModOfThreeToString,
        thenTapLog, // 6
        thenSquare,
        thenTapLog, // 5
        thenGetLength,
        thenTapLog, // 4
        thenGetApiResult,
        apiGetNumberBinaryBase,
        tapLog, // 3
        roundStringToNumber,
    );

    const runWithCondition = ifElse(validate, sequenceComposition, handleValidationError); // 2
    const logAndRunSequence = compose(runWithCondition, tapLog); // 1

    logAndRunSequence(value);
};

export default processSequence;
