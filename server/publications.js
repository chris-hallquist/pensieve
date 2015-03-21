Meteor.publish('decks', function() {	
	return Decks.find({userId: this.userId});
})