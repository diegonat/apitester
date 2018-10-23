angular.module('formApp', [])
  .controller('FormController', function($scope, $http) {
    console.log('this is FormController');
    var formCtrl = this;
    $scope.results = "";
    $scope.url_enpoint = "https://{your_api_id}.execute-api.us-east-1.amazonaws.com/Prod";
    $scope.payload = "Call now and get 80% discount on your next pair of shoes! Call 8003344555!";
    $scope.spam = false;
    $scope.showResult = false;
    $scope.sendPayload = function() {
      $scope.result = "please wait...";
      console.log($http);
      $http({
        method: 'POST',
        url: $scope.url_enpoint,
        data: $scope.payload
      }).then(function successCallback(response) {
          console.log('SUCCESS ');
          console.log(response);
          $scope.results = response;
          $scope.showResult = true;
          /* --- PLACEHOLDER --- */
          var resultData = response.data;
          //alert(parseInt(resultData.predicted_label));
          
          $scope.spam = parseInt(resultData.predicted_label);
          $scope.confidence = resultData.predicted_probability;
          /* --- END OF PLACEHOLDER --- */
        }, function errorCallback(response) {
          console.log('ERROR');
          console.log(response);
          $scope.results = response ;
          $scope.showResult = false;
        });
    };
  });
