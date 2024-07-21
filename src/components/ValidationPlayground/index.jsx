import React from 'react';
import InputWithValidation from './InputWithValidation';
import {
    validateFieldN1,
    validateFieldN2,
    validateFieldN3,
    validateFieldN4,
    validateFieldN5,
    validateFieldN6,
    validateFieldN7,
    validateFieldN8,
    validateFieldN9,
    validateFieldN10,
} from '../../helpers/validators';


import styles from './styles.module.css';


const ValidationPlayground = () => {
    return (
        <div className={styles.root}>
            <InputWithValidation validateFn={validateFieldN1} label="1. Красная звезда, зеленый квадрат, все остальные белые"/>

            <InputWithValidation validateFn={validateFieldN2} label="2. Как минимум две фигуры зеленые"/>

            <InputWithValidation validateFn={validateFieldN3} label="3. Количество красных фигур равно кол-ву синих"/>

            <InputWithValidation validateFn={validateFieldN4} label="4. Синий круг, красная звезда, оранжевый квадрат, треугольник любого цвета"/>

            <InputWithValidation validateFn={validateFieldN5} label="5. Три фигуры одного любого цвета кроме белого (четыре фигуры одного цвета – это тоже true)"/>

            <InputWithValidation validateFn={validateFieldN6} label="6. Ровно две зеленые фигуры (одна из зелёных – это треугольник), плюс одна красная. Четвёртая оставшаяся любого доступного цвета, но не нарушающая первые два условия"/>

            <InputWithValidation validateFn={validateFieldN7} label="7. Все фигуры оранжевые"/>

            <InputWithValidation validateFn={validateFieldN8} label="8. Не красная и не белая звезда, остальные – любого цвета"/>

            <InputWithValidation validateFn={validateFieldN9} label="9. Все фигуры зеленые"/>

            <InputWithValidation validateFn={validateFieldN10} label="10. Треугольник и квадрат одного цвета (не белого)"/>
        </div>
    );
};


export default ValidationPlayground;
