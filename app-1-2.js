(function(){
  
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', function(){
		this.products = gems;
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

	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
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