import * as React from 'react';
import './Card.css';
import {getFormattedDateFromUtcDate} from '../../utils/common';
import {bookmarked, notBookmarked, notRegistered, registered, cannotRegister} from '../../constants/fontAwesomeClasses';
import {UPDATE_EVENT as updateEvent} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

export default function Card(cardInfo) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);

  React.useEffect(() => {
    setIsBookmarked(cardInfo.isBookmarked);
    setIsRegistered(cardInfo.isRegistered);
  }, []);

  const handleBookMark = () => {
    makeRequest(updateEvent(cardInfo.id), {
      data: {
        isBookmarked: !isBookmarked,
      },
    }).then((response) => {
      setIsBookmarked(!isBookmarked);
    });
  };

  const handleRegister = () => {
    makeRequest(updateEvent(cardInfo.id), {
      data: {
        isRegistered: !isRegistered,
      },
    }).then((response) => {
      setIsRegistered(!isRegistered);
    });
  };

  console.log('cardInfo', cardInfo);
  return (
    <div id='event-card'>
      <div id='event-card-image'>
        <img src={cardInfo.imgUrl} alt={cardInfo.name} />
      </div>
      <div id='event-card-content'>
        <div id='event-card-content-title'>{cardInfo.name}</div>
        <div id='event-card-content-description'>{cardInfo.description}</div>
        <div id='event-card-content-venue'><span>VENUE</span>:{cardInfo.venue}</div>
        <div id='event-card-content-date'><span>DATE</span>:{getFormattedDateFromUtcDate(cardInfo.datetime)}</div>
      </div>
      <div id='event-card-engagements'>
        <div id='event-card-engagements-register'>
          {cardInfo.areSeatsAvailable ? (
            <div id={isRegistered ? 'success' : 'failure'} onClick={handleRegister}>
              <i className={isRegistered ? registered : notRegistered}></i>
              <span>{isRegistered ? ' REGISTERED' : ' REGISTER'}</span>
            </div>
          ) : (
            <div id='neutral'>
              <i className={cannotRegister}></i>
              <span> NO SEATS AVAILABLE</span>
            </div>
          )}
        </div>
        <div id='event-card-engagements-bookmark' onClick={handleBookMark}>
          <i className={isBookmarked ? bookmarked : notBookmarked}></i>
        </div>
      </div>
    </div>
  );
}
