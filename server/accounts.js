Accounts.onCreateUser(function(options, user) {
	// Create a new deck with some standard cards
	var javaScriptId = Decks.insert({
		name: 'JavaScript',
		userId: user._id,
	});
	
	Cards.insert({
		deckId: javaScriptId,
		userId: user._id,
		front: 'JS code to return the length of a string <code>str</code>',
		back: 'str.length',
		interval: 0,
		nextReview: new Date(),
		isNew: true
	});
	
	return user;
});