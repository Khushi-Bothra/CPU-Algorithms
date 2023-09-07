import React from 'react';

import styles from './link.module.scss';

const Link = () => (
  <div className={styles.link}>
    <a href="https://khushi-bothra.github.io/ram-algorithms/">RAM Scheduler</a>
    <a href="https://khushi-bothra.github.io/disk-algorithms/">Disk Scheduler</a>
    <a href="https://khushi-bothra.github.io/file-allocation/">File allocation</a>
  </div>
);

export default Link;