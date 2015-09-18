# Paging navigation

A better way to implement pagination using Internal transitions

## Question:
What is the proper way to add “previous” and “Next” buttons for data pagination?

## Answer/Research:
You can use link tag with rel=“next” or rel=“prev” and href that has the complete url to get data.
* if we follow this design, we will need to change our routing function and have it carry the pagination number with it
	* ex: appurl/data?currentPage=2&size=50
* In order to make this work in Ember by setting a “refreshModel” attribute of the concerned param, to true

## Resource:
* http://googlewebmastercentral.blogspot.com/2011/09/pagination-with-relnext-and-relprev.html
* http://guides.emberjs.com/v2.0.0/routing/query-params/#toc_opting-into-a-full-transition

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
