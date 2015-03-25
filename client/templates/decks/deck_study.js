Template.deckStudy.helpers({
	deck: function () {
		return Decks.findOne();
	},
	card: function () {
		return Cards.findOne({nextReview: {$lte: new Date()}});
	}
})