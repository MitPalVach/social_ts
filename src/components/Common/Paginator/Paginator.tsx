import React, {useState} from 'react';
import styles from "../../Users/Users.module.css";


type UsersType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Paginator: React.FC<UsersType> = (props): JSX.Element => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={styles.usersPagination}>
            {portionNumber > 1 &&
            <button className={styles.pageBtn}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}> &larr; </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p}
                                 className={props.currentPage === p ? styles.selectedPage : styles.pages}
                                 onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })}
            {portionCount > portionNumber &&
            <button className={styles.pageBtn}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}> &rarr; </button>}
        </div>
    )
};

export default Paginator;


