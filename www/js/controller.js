app.controller('TodosCtrl', function($scope, $firebaseArray, $state, todoService, $ionicActionSheet){
    $scope.todos = todoService.all;
    
    $scope.saveTodo = function(name){

       $scope.newTodo = todoService.all;
       $scope.newTodo.$add({
           name: name
       });

       $state.go('todos');
        $scope.name = '';
    };

    $scope.removeTodo = function(id){
        $ionicActionSheet.show({
            destructiveText: "Sterge Todo",
            titleText: "Esti sigur ca vrei sa-l stergi?",
            cancelText: "Anuleaza",
            destructiveButtonClicked: function(){
                var rem = $scope.todos.$getRecord(id);
                $scope.todos.$remove(rem);
                return true;
            }
        });
    };


});