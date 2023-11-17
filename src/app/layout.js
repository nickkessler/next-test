import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer>Dogs are better than cats</footer>
      </body>
    </html>
  );
}

export default RootLayout;
