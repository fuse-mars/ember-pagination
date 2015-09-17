import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['page'],
	page: 1,//giving "page" a default value prevents it from being displayed
	
	currentPage: Ember.computed.readOnly('page'), //one binding from page to currentPage
	minimum: Ember.computed.equal('currentPage', 1),
	prev: Ember.computed('currentPage', function() {
		var minimum = this.get('minimum');
		return (minimum)? this.get('currentPage'): (this.get('currentPage') - 1);
	}),
	next: Ember.computed('currentPage', function() {
		return this.get('currentPage') + 1;
	})
});
