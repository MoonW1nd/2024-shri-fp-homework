import React from 'react';

import styles from './styles.module.css';


const Task = ({title, description, children}) => {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>
                {title}
            </h2>

            <p>{description}</p>

            {children}
        </div>
    );
};


export default Task;
