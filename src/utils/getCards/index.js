const getCardsByFilter = (cards, setCards, myFilter) => {
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

const getCardsByName = (cards, setCards, myName) => {
  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(myName.toLowerCase());
  });
  setCards(filteredCards);
};

export {getCardsByFilter, getCardsByName};
