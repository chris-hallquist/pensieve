Template.deckItem.helpers({
	activeCards: function () {
		var now = new Date()
		return Cards.find({
			deckId: this._id, 
			nextReview: {$lte: now}
		}).count();
	}
});