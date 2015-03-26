Accounts.onCreateUser(function(options, user) {
	// Create a new deck with some standard cards
	var javaScriptId = Decks.insert({
		name: 'JavaScript',
		userId: user._id,
	});
	
	var blankJSCard = {
		deckId: javaScriptId,
		userId: user._id,
		interval: 0,
		nextReview: new Date(),
		isNew: true
	}
	
	Cards.insert(_.extend(blankJSCard, {
		front: 'JS code to return the length of a string <code>str</code>',
		back: '<code>str.length</code>',
	}));
	
	Cards.insert(_.extend(blankJSCard, {
		front: 'How are strings indicated in JavaScript?',
		back: 'Strings can be indicated with single quotes <i>or</i> double quotes',
	}));
	
	Cards.insert(_.extend(blankJSCard, {
		front: 'How are comments inidcated in JavaScript',
		back: 'With two forward slashes, like so: <code>// This is a comment</code>',
	}));
	
	Cards.insert(_.extend(blankJSCard, {
		front: 'JS function to send a message to the user which they can respond to by clicking "OK"',
		back: '<code>alert(message);</code>',
	}));

	Cards.insert(_.extend(blankJSCard, {
		front: 'JS function to send a message to the user which they can respond to by clicking "OK" <i>or</i> "cancel"',
		back: '<code>confirm(message);</code>',
	}));
		
	return user;
});