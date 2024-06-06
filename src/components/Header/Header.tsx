import React from 'react'
import './Header.scss'

interface HeaderProps  {
  headerImageSrc?: string;
  headerImageAlt?: string;
}


const Header: React.FC<HeaderProps> = ({headerImageSrc, headerImageAlt}) => {
  return (
    <div className='header'>
        <img src={headerImageSrc} alt={headerImageAlt} height='35px'/>
      
    </div>
  )
}

export default Header
