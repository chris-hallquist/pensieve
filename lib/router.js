Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'decksList',
	waitOn: function() {
		return [Meteor.subscribe('decks'), Meteor.subscribe('cards')];
	}
});