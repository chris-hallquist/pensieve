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
	
	/* Next four functions could be refactored further */
	'click .again': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', false);
		
		var cardId = Session.get('card')._id;
		
		Meteor.call('updateReviewTime', cardId, 1);
		
		// var newTime = new Date();
		// newTime.setSeconds(newTime.getSeconds() + 1);
		// 
		// Cards.update(cardId, {$set: {
		// 	nextReview: newTime,
		// 	interval: 0
		// }});
		
		Session.set('card', Cards.findOne({
			nextReview: {$lte: new Date()}
		}));
	},
	'click .hard': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', false);
		
		var currentCard = Session.get('card')
		var cardId = currentCard._id;
		var interval = currentCard.interval;
		
		if (currentCard.isNew) {
			var newInterval = 60;
		} else if (currentCard.interval < 86400) {
			var newInterval = 86400; // 1 day
		} else {
			var newInterval = currentCard.interval * 1.5
		}

		Meteor.call('updateReviewTime', newInterval);

		// var newTime = new Date();
		// newTime.setSeconds(newTime.getSeconds() + newInterval);
		// 
		// Cards.update(cardId, {$set: {
		// 	nextReview: newTime,
		// 	interval: newInterval,
		// 	isNew: false
		// }});
		
		Session.set('card', Cards.findOne({
			nextReview: {$lte: new Date()}
		}));
	},
	'click .good': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', false);
		
		var currentCard = Session.get('card')
		var cardId = currentCard._id;
		var interval = currentCard.interval;
		
		if (currentCard.isNew) {
			var newInterval = 600;
		} else if (currentCard.interval < 86400) {
			var newInterval = 86400 * 2; // 2 days
		} else {
			var newInterval = currentCard.interval * 2.5
		}

		Meteor.call('updateReviewTime', newInterval);

		// var newTime = new Date();
		// newTime.setSeconds(newTime.getSeconds() + newInterval);
		// 
		// Cards.update(cardId, {$set: {
		// 	nextReview: newTime,
		// 	interval: newInterval,
		// 	isNew: false
		// }});
		
		Session.set('card', Cards.findOne({
			nextReview: {$lte: new Date()}
		}));
	},
	'click .easy': function(e) {
		e.preventDefault();
		
		Session.set('showCardBack', false);
		
		var currentCard = Session.get('card')
		var cardId = currentCard._id;
		var interval = currentCard.interval;
		
		if (currentCard.isNew) {
			var newInterval = 86400; // 1 day
		} else if (currentCard.interval < 86400) {
			var newInterval = 86400 * 3; // 3 days
		} else {
			var newInterval = currentCard.interval * 3.5
		}

		Meteor.call('updateReviewTime', newInterval);

		// var newTime = new Date();
		// newTime.setSeconds(newTime.getSeconds() + newInterval);
		// 
		// Cards.update(cardId, {$set: {
		// 	nextReview: newTime,
		// 	interval: newInterval,
		// 	isNew: false
		// }});
		
		Session.set('card', Cards.findOne({
			nextReview: {$lte: new Date()}
		}));
	}
});