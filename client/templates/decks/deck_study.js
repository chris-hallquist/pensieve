Template.deckStudy.created = function() {
	// We want to initially not show the back of the card
}

Template.deckStudy.helpers({
	deck: function () {
		return Decks.findOne();
	},
	card: function () {
		return Cards.findOne({
			nextReview: {$lte: new Date()}
		});
	},
	front: function () {
		return new Spacebars.SafeString(Cards.findOne({
			nextReview: {$lte: new Date()}
		}).front);
	},
	back: function () {
		return new Spacebars.SafeString(Cards.findOne({
			nextReview: {$lte: new Date()}
		}).back);
	},
	showCardBack: function () {
		return Session.get('showCardBack');
	}
});

Template.deckStudy.events({
	'click .showAnswer': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', true);
	}
})