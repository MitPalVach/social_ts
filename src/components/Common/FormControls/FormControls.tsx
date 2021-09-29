import React from 'react';
import styles from './FormControls.module.css';
import {WrappedFieldProps} from "redux-form";


export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    const showError = props.meta.touched && props.meta.error
    return (
        <div className={`${styles.formControl} ${showError ? styles.error : ''}`}>
            <div>
                <textarea {...props.input} {...restProps}/>
            </div>
            {showError && <div className={styles.errorMessage}>{props.meta.error}</div>}
        </div>
    );
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    const showError = props.meta.touched && props.meta.error
    return (
        <div className={`${styles.formControl} ${showError ? styles.error : ''}`}>
            <div>
                <textarea className={styles.inputWindow} {...props.input} {...restProps}/>
            </div>
            {showError && <div className={styles.errorMessage}>{props.meta.error}</div>}
        </div>
    );
};



