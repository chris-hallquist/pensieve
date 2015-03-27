Template.deckStudy.created = function() {
	Session.set('showCardBack', false);
	
	Session.set('card', Cards.findOne({
		nextReview: {$lte: new Date()}
	}));
}

Template.deckStudy.helpers({
	deck: function () {
		return Decks.findOne();
	},
	card: function () {
		return Session.get('card');
	},
	front: function () {
		return new Spacebars.SafeString(Session.get('card').front);
	},
	back: function () {
		return new Spacebars.SafeString(Session.get('card').back);
	},
	showCardBack: function () {
		return Session.get('showCardBack');
	}
});

Template.deckStudy.events({
	'click .showAnswer': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', true);
	},
	'click .again': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', false);
		
		var cardId = Session.get('card')._id;
		
		var newTime = new Date();
		newTime.setSeconds(newTime.getSeconds() + 1);
		
		Cards.update(cardId, {$set: {nextReview: newTime}});
		
		Session.set('card', Cards.findOne({
			nextReview: {$lte: new Date()}
		}));
	}
})