import Ember from 'ember';

export default Ember.Controller.extend({
	page: 1,
	
	currentPage: Ember.computed.readOnly('page'),
	minimum: Ember.computed.equal('currentPage', 1),
	prev: Ember.computed('currentPage', function() {
		var minimum = this.get('minimum');
		return (minimum)? this.get('currentPage'): (this.get('currentPage') - 1);
	}),
	next: Ember.computed('currentPage', function() {
		return this.get('currentPage') + 1;
	})

});