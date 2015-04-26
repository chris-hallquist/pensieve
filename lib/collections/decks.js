Decks = new Mongo.Collection('decks');

Meteor.methods({
	deckInsert: function(name) {		
		check(Meteor.userId(), String);
		check(name, String);
		
		// Might want to add some error logic
		
		var user = Meteor.user();
		
		Decks.insert({
			name: name,
			userId: user._id
		});
	}
});