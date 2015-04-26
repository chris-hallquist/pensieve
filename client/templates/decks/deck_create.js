Template.deckCreate.events({
	'submit #create': function(e) {				
		e.preventDefault();
		
		var deckName = $(e.currentTarget).find('input').val();
		
		Meteor.call('deckInsert', deckName);
		
		Router.go('decksList');
	}
});