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
        <footer>Dogs are better than cats</footer>
      </body>
    </html>
  );
}

export default RootLayout;
