Cards = new Mongo.Collection('cards');

Meteor.methods({
	cardInsert: function(cardAttributes) {
		var user = Meteor.user();
		
		var blankCard = {
			deckId: javaScriptId,
			userId: user._id,
			interval: 0,
			nextReview: new Date(),
			isNew: true
		}
				
		Decks.insert(_.extend(blankCard, cardAttributes));
	},
	
	// Note–previously thought this code was broken, seems to work now
	updateReviewTime: function(cardId, interval) {
		var newTime = new Date();
		newTime.setSeconds(newTime.getSeconds() + interval);
		
		Cards.update(cardId, {$set: {
			nextReview: newTime,
			interval: interval
		}});
	}
});

