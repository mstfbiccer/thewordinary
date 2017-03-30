angular.module('TheWordinaryApp', ['ngMaterial', 'ngMessages'])
  .controller('AppCtrl', ['$scope', function ($scope) {
    $scope.items = [{ name: 'Beginner', val: 1 },
    { name: 'Elementary', val: 2 },
    { name: 'Pre-Intermediate', val: 3 },
    { name: 'Low Intermediate', val: 4 },
    { name: 'Intermediate', val: 5 },
    { name: 'Upper Intermediate', val: 6 },
    { name: 'Pre-advanced', val: 7 },
    { name: 'Advanced', val: 8 },
    { name: 'Very Advanced', val: 9 }];
    $scope.selectedItem;
    $scope.profileName = "Anonymous";
    $scope.description = "No details found";
    $scope.currentLevel = "Beginner";
    $scope.selectedCategories = "Colour,Education";
    
    $scope.getSelectedText = function () {
      if ($scope.selectedItem !== undefined) {
        return "" + $scope.selectedItem.name;
      } else {
        return "Please select a level";
      }
    }

  }]
  
  )
  .controller('AppCtrl2', DemoCtrl)
  .config(function ($mdThemingProvider, $mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'img/icons/sets/communication-icons.svg')
      .icon('favorite', 'img/icons/favorite.svg');
    $mdThemingProvider.theme('TheWordinaryTheme')
      .primaryPalette('blue')
      .accentPalette('indigo');

  });
function DemoCtrl($timeout, $q) {
  var self = this;

  self.readonly = false;
  self.selectedItem = null;
  self.searchText = null;
  self.querySearch = querySearch;
  self.vegetables = loadVegetables();
  self.randomCategories=self.vegetables.slice(0,3);
  self.selectedVegetables = [];
  self.numberChips = [];
  self.numberChips2 = [];
  self.numberBuffer = '';
  self.autocompleteDemoRequireMatch = true;
  self.transformChip = transformChip;

  /**
   * Return the proper object when the append is called.
   */
  function transformChip(chip) {
    // If it is an object, it's already a known chip
    if (angular.isObject(chip)) {
      return chip;
    }

    // Otherwise, create a new one
    return { name: chip, type: 'new' }
  }

  /**
   * Search for vegetables.
   */
  function querySearch(query) {
    var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
    return results;
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(vegetable) {
      return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
        (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
    };

  }

  function loadVegetables() {
    var categories = [
      { categoryName: 'Clothes and Accessories', categoryId: '1' ,words: []},
      { categoryName: 'Colours', categoryId: '2', words: ["gold ", "orange ", "silver", "black ", "golden ", "pink ", "yellow", "blue", "brown", "green", "grey", "purple", "red", "white"] },
      { categoryName: 'Communications and Technology', categoryId: '3', words: [] },
      { categoryName: 'Education', categoryId: '4',words: [] },
      { categoryName: 'Entertainment and Media', categoryId: '5',words: [] }
    ]

    return categories.map(function (veg) {
      veg._lowername = veg.categoryName.toLowerCase();
      veg._lowertype = veg.categoryId.toLowerCase();
      veg._lowertype = veg.words;
      return veg;
    });
  }
}