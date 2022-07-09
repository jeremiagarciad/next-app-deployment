import React from 'react';


type TDarkLayoutProps = {
  children: React.ReactNode;
}

const DarkLayout: React.FC<TDarkLayoutProps>= ({  children }) => { 
  return (
    <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '10px',
        borderRadius: '10px',
    }}>
        <h3>DarkLayout</h3>
        { children }

    </div>
  )
}

export default DarkLayout