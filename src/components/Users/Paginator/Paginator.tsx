import React, {useState} from 'react';
import styles from './paginator.module.css';


type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChangeHandler: (currPage: number) => void;
};

export const Paginator = (props: PropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionSize = 10
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      Prev{ portionNumber > 1 &&
        <button className={styles.button_prev} onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p, idx) => {
          return (
            <span
              key={idx}
              onClick={() => props.onPageChangeHandler(p)}
              className={props.currentPage === p ? styles.selected__page : ''}
            >
              {p}
            </span>
          );
        })}
      { portionCount > portionNumber &&
          <button className={styles.button_next} onClick={() => { setPortionNumber(portionNumber + 1)} }>Next</button>}
    </div>
  );
};
