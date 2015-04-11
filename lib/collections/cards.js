Cards = new Mongo.Collection('cards');

// Note–previously thought this code was broken, seems to work now
Meteor.methods({
	updateReviewTime: function(cardId, interval) {
		var newTime = new Date();
		newTime.setSeconds(newTime.getSeconds() + interval);
		
		Cards.update(cardId, {$set: {
			nextReview: newTime,
			interval: interval
		}});
	}
});