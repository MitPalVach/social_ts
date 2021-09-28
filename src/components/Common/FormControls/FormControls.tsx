import React from 'react';
import styles from './FormControls.module.css';


// type PropsType = {
//     meta: {
//         touched: any
//         error:any
//     }
// }
export const Textarea = (props: any) => {
    const showError = props.meta.touched && props.meta.error
    return (
        <div className={`${styles.formControl} ${showError ? styles.error : ''}`}>
            <div>
                <textarea {...props}/>
            </div>
            {showError && <div className={styles.errorMessage}>{props.meta.error}</div>}
        </div>
    );
};



