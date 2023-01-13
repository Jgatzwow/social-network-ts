import React from 'react';
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

  return (
    <div>
      {pages.map((p, idx) => {
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
    </div>
  );
};
