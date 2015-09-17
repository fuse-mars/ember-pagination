import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
    	page: {
      		refreshModel: true
    	}
  	},
	model(params) {
		console.log('[routequery route] - model:', params);

		// return Promise that resolve with data from the backend;
	},
	setupController(controller, model) {
		this._super(...arguments);
		console.log('[routeparam route] - setupController: model =', model, 'currentPage =', controller.get('currentPage'));

	}
});
