import React from 'react';

import Task from '../Task';
import ChainPlayground from '../ChainPlayground'
import ValidationPlayground from '../ValidationPlayground'
import styles from './styles.module.css';


const Layout = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>
                Домашняя работа по теме "Функциональное программирование" в рамках программы ШРИ.
            </h1>

            <p>
                Для решения используйте Ramda или любые другие библиотеки. Ramda, Lodash уже добавлены в package.json
                Оставьте файловую структуру и интерфейс функций без изменений. Это поможет нам быстрее проверить работу.
                Максимально используйте функциональное программирование!
            </p>

            <Task
                title="Функции для проверки валидации различных комбинаций ключей"
                description="Добавьте в src/helpers/validators.js функции для корректной валидации ключей. onClick по фигуре меняет цвет, onAuxClick (средняя кнопка мыши) или onDoubleClick сбрасывают значение"
            >
                <ValidationPlayground />
            </Task>

            <Task
                title="Цепочка из синхронных и асинхронных действий"
                description="Допишите файл src/helpers/processSequence.js.
                    Необходимо написать последовательную цепочку для вычисления разных значений, которая состоит
                    из синхронных и асинхронных действий.
                    Напишите реализацию в FP стиле."
            >
                <ChainPlayground />
            </Task>
        </div>
    );
};


export default Layout;
