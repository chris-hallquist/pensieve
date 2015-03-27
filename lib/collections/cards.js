Cards = new Mongo.Collection('cards');

// This doesn't work
// Meteor.methods({
// 	updateReviewTime: function(cardId, interval, newInterval) {
// 		var newTime = new Date();
// 		newTime.setSeconds(newTime.getSeconds() + interval);
// 		
// 		Cards.update(cardId, {$set: {
// 			nextReview: newTime,
// 			interval: newInterval
// 		}});
// 	}
// });