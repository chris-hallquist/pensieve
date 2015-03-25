Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'decksList',
	waitOn: function() {
		return [Meteor.subscribe('decks'), Meteor.subscribe('cards')];
	}
});

Router.route('decks/:_id/study', {
	name: 'deckStudy',
	waitOn: function(){
		return [
			Meteor.subscribe('singleDeck', this.params._id),
			Meteor.subscribe('singleDeckCards', this.params._id)
		];
	}
});