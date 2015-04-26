Template.cardAdd.events({
	'submit #card-add': function(e) {
		var deckId = Decks.findOne()._id;
		
		var attributes = {
			deckId: deckId,
			front: $('#front').val(),
			back: $('#back').val()
		}
		
		Meteor.call('cardInsert', attributes);
		
		Router.go('cardAdd', {_id: deckId});
	}
});

Template.cardAdd.helpers({
	deck: function() {
		return Decks.findOne();
	}
});