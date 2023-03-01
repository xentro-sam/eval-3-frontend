import * as React from 'react';
import './Card.css';
import {getFormattedDateFromUtcDate} from '../../utils/common';

export default function Card(cardInfo) {
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
    </div>
  );
}
