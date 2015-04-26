Template.deckCreate.events({
	'submit #create': function(e) {
		// attributes include front, back, and deckId
		
		Meteor.call('cardInsert', attributes);
		
		// navigate where?
	}
});