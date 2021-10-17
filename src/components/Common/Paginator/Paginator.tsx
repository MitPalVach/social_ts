import React from 'react';
import styles from "../../Users/Users.module.css";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
const Paginator = (props: UsersType): JSX.Element => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersPagination}>
            {pages.map((p) => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : styles.pages}
                             onClick={() => props.onPageChanged(p)}
                >{p}</span>
            })}
        </div>
    )
};

export default Paginator;