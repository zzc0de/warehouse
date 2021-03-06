import React, { useEffect, useState } from 'react';
import SearchData from '../UI/search/SearchData';
import './header.css';

const Header = ({pageName, getSearchQuery, value, delSearchQuery, searchQueryLength}) => {
 


  return (
      <div className="header">
        { pageName === 'deviceSearhPage' && 
        <SearchData
        placeholder="Поиск..."
        value={value}
        onChange={(e) => getSearchQuery(e.target.value)}
        delSearchQuery={delSearchQuery}
        searchQueryLength={searchQueryLength}
        />
        }
      </div>
  )
}

export default Header;
