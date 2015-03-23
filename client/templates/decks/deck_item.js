Template.deckItem.helpers({
	activeCards: function () {
		return _.select(Cards.find({deckId: this._id}), function(card) { 
			return card.nextReview < Date.now();
		}).count();
	}
});