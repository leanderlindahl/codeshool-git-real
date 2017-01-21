(function(){
  
  var app = angular.module('gemStore', []);
  
  app.controller('ReviewController', function(){
  	this.review = {};

  	this.addReview = function(product) {
  		product.reviews.push(this.review);
  		this.review = {};
  	};

  });

  app.controller('StoreController', function(){
		this.products = storeProducts;
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};

	});

	var storeProducts = [
		{
			name: "Dodecahedron",
			price: 250.00,
			description: "Awesome Multi-touch keyboard",
			images: [
				{
					full: 'dodecahedron-01-full.png',
					thumb: 'dodecahedron-01-thumb.png'
				},
				{
					full: 'dodecahedron-02-full.png',
					thumb: 'dodecahedron-02-thumb.png'
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "This is the very nice description",
			images: [
				{
					full: 'dodecahedron-01-full.png',
					thumb: 'dodecahedron-01-thumb.png'
				},
				{
					full: 'dodecahedron-02-full.png',
					thumb: 'dodecahedron-02-thumb.png'
				}
			]
		}
	];

})();