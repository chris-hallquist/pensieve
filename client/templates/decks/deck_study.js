Template.deckStudy.helpers({
	deck: function () {
		return Decks.findOne();
	},
	card: function () {
		return Cards.findOne({nextReview: {$lte: new Date()}});
	},
	front: function () {
		return new Spacebars.SafeString(Cards.findOne({
			nextReview: {$lte: new Date()}
		}).front);
	}
})