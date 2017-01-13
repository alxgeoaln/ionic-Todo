app.factory('todoService', function($firebaseArray){
    var ref = new Firebase('https://todos-50736.firebaseio.com/');
    var todos = $firebaseArray(ref);
    var todoService= {
        all: todos,
        get: function(todoId){
            return todos.$getRecord(todoId);
        }
    }

    return todoService;
});