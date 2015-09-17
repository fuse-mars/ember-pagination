import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		console.log('[routeparam route] - model: params = ', params);

		if(this.controller) {
			this.controller.set('page', parseInt(params.page));
		}
		// return Promise that resolve with data from the backend
	},
	setupController(controller, model) {
		console.log('[routeparam route] - setupController: model =', model, 'currentPage =', controller.get('currentPage'));
	}
});
