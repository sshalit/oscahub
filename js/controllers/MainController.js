app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  	$scope.todo = {
  	    title:"",
  	    list: ["11/2/2018 - Dinner is on! Thanks, Sally, for saving the meal!", "11/7/2018 - We are serving romaine. Eat with caution.", "11/15/2018 - The water has been cleared for drinking!"]
  	}

    function hasOnlyNumbers(item) {
      return /^[0-9]*$/.test(item)
    }
  	
    $scope.addItem = function(itemList, item) {
      // ISBN : 10 or 13 length and consisdt of only numbers
      if ((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)) {
        console.log("ISBN");
        $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).success(function(data) {
          itemList.push("Title: " + data.items[0].volumeInfo.title + " // Author(s):" + data.items[0].volumeInfo.authors)
        })
      } else {
        console.log("Not an ISBN")
        itemList.push(item);
      }
  	}

}]);
