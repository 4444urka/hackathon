import React, { ReactNode } from 'react';
import './Blank.scss'


interface BlankProps {
  children: ReactNode;
}

const Blank: React.FC<BlankProps> = ({ children }) => {
  return (
    <div className="blank">
        {children}
    </div>
  );
}

export default Blank