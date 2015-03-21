Meteor.publish('decks', function() {	
	return Decks.find({userId: this.userId});
})

Meteor.publish('cards', function() {
	return Cards.find();
})