import React from 'react';

type PropsType = {
  contactTitle: string
  contactValue: string
}

export const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
  return (
    <>
      {!contactValue
        ? <span></span>
        : <div>
        {contactTitle} : {contactValue}
      </div>}
    </>
  );
};

