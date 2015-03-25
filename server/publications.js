Meteor.publish('decks', function() {	
	return Decks.find({userId: this.userId});
})

Meteor.publish('singleDeck', function(id) {
	check(id, String);
	return Decks.find(id);
});

Meteor.publish('cards', function(deckId) {
	return Cards.find();
})

Meteor.publish('singleDeckCards', function(deckId){
	return Cards.find({deckId: deckId});
});