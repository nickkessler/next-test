import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer>Copyright 1999</footer>
      </body>
    </html>
  );
}

export default RootLayout;
