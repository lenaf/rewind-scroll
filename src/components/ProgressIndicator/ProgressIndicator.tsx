import React, { useContext } from 'react';


import styles from './ProgressIndicator.module.css';
import { ProgressIndicatorContext } from 'src/context/ProgressIndicatorContext';
import Lightning from './lightning.svg';



const ProgressIndicator = ({ totalScreenCount }: { totalScreenCount: number }) => {
  const { activeIndex, setActiveIndex } = useContext(ProgressIndicatorContext);

  const dots: any = [];
  for (let i = 0; i < totalScreenCount; i++) {
    dots.push(
      // TODO Update with switch on other icons

    );
  }

  return <div className={styles.container}>{[0, 1, 2, 3, 4, 5].map((i) => {
    return (<div key={i} style={{ color: (activeIndex ?? 0) === i ? '#1ce783' : 'white', fontSize: '36px' }}>
      {i + 1}
    </div>);
  })}</div >;
};

export default ProgressIndicator;
