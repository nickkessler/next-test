import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        {children}
        <footer>Dogs are better than cats</footer>
      </body>
    </html>
  );
}

export default RootLayout;
