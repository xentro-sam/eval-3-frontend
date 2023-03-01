const getCards = (cards, setCards, myFilter) => {
  const filteredCards = cards.filter((card) => {
    if (myFilter === 'bookmarked') {
      return card.isBookmarked;
    } else if (myFilter === 'registered') {
      return card.isRegistered;
    } else if (myFilter === 'seatsAvailable') {
      return card.areSeatsAvailable;
    } else {
      return card;
    }
  });
  setCards(filteredCards);
};

export default getCards;
