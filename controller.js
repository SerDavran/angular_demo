// http & interval service
app.controller('myController', function($scope, $http, $interval) {
    $scope.time = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
    $scope.name = 'Serafim';
    $scope.startingVar = 'First var name';
    $scope.quantity = 0;
    $scope.cost = 0;
    // Object
    $scope.person = [{firstName:'Serafim', lastName:'Ntavranis'},
                    {firstName:'Serafim2', lastName:'Ntavranis2'},
                    {firstName:'Serafim3', lastName:'Ntavranis3'}];
    // Arrays
    $scope.myArray = [1, 3, 4, 6, 7, 24, 8, 46]; 
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    // Function
    $scope.changeName = function(){
        if( $scope.startingVar != 'Second var name' ){
            $scope.startingVar = 'Second var name';
        }else{
            $scope.startingVar = 'First var name';
        }
    }

    // http
    $scope.getResponce = function(){
        $http.get("response.html").then(function(response){
            $scope.response_val = response.data;
        });
    }
});
