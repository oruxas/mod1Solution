
  angular.module("mod1Solution", [])
    .controller("solutionController", function($scope){
        $scope.inputText = "Hello";

        $scope.check = function(inputText){
            var res = inputText.split(",");
            conxole.log(res);
        }
    });

