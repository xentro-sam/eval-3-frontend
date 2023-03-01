import * as React from 'react';
import './EventsContainer.css';
import {GET_ALL_EVENTS} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Card from '../Card';
import {filter, chevronUp, search, notRegistered, registeredAlt} from '../../constants/fontAwesomeClasses';
import getCards from '../../utils/getCards';

let ALLCARDS = [];

export default function EventsContainer() {
  const [cards, setCards] = React.useState([]);
  const [filterOptions, setFilterOptions] = React.useState({
    all: true,
    bookmarked: false,
    registered: false,
    seatsAvailable: false,
  });

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {})
        .then((response) => {
          ALLCARDS = response;
          setCards(response);
        });
  }, []);

  const handleFilter = (filter) => {
    getCards(ALLCARDS, setCards, filter);
    setFilterOptions({
      all: false,
      bookmarked: false,
      registered: false,
      seatsAvailable: false,
      [filter]: true,
    });
  };

  return cards ? (
    <div id='container' className='page-padding'>
      <div id='container-header'>
        <div id='filter'>
          <i className={filter}></i>
          <span>  FILTER  </span>
          <i className={chevronUp}></i>
        </div>
        <div id='search'>
          <input type='text' placeholder='Search' />
          <i className={search}></i>
        </div>
      </div>
      <div id='filter-options'>
        <div id='filter-option-1' onClick={()=>handleFilter('all')}>
          <i className={filterOptions.all ? registeredAlt : notRegistered}></i>
          <span>  ALL</span>
        </div>
        <div id='filter-option-2' onClick={()=>handleFilter('bookmarked')}>
          <span>BOOKMARKED  </span>
          <i className={filterOptions.bookmarked ? registeredAlt : notRegistered}></i>
        </div>
        <div id='filter-option-1' onClick={()=>handleFilter('registered')}>
          <i className={filterOptions.registered ? registeredAlt : notRegistered}></i>
          <span>  REGISTERED</span>
        </div>
        <div id='filter-option-2' onClick={()=>handleFilter('seatsAvailable')}>
          <span>SEATS AVAILABLE  </span>
          <i className={filterOptions.seatsAvailable ? registeredAlt : notRegistered}></i>
        </div>
      </div>
      <div id='event-container'>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
