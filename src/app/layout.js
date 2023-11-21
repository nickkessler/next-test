import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <header>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        <footer>Copyright 1999</footer>
      </body>
    </html>
  );
}

export default RootLayout;
