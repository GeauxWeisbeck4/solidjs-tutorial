import type { Component } from 'solid-js';

import tarheeldevlogo1 from './tarheeldevlogo1.png';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={tarheeldevlogo1} class={styles.logo} alt="logo" />
        <p>
          Happy New Years from your favorite digital studio!
        </p>
        <a
          class={styles.link}
          href="https://github.com/geauxweisbeck4/tarheeldigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tar Heel Dev Studio
        </a>
      </header>
    </div>
  );
};

export default App;
