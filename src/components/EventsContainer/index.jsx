import * as React from 'react';
import './EventsContainer.css';
import {GET_ALL_EVENTS} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Card from '../Card';

export default function EventsContainer() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {})
        .then((response) => {
          setCards(response);
        });
  }, []);

  return cards ? (
    <div id='event-container' className='page-padding'>
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
