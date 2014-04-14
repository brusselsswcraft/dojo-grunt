angular.module('dojo.view.main', [
    'dojo.service.task'
])
    .controller('DojoController', function ($scope, taskService) {
        $scope.text = '';
        $scope.tasks = taskService.tasks();
        $scope.createTask = function () {
            taskService.createTask($scope.text);
            $scope.text = '';
        };
        $scope.taskStatus = function (task, status) {
            task.done = status;
            taskService.save();
        };
        $scope.taskDelete = function (task) {
            taskService.deleteTask(task);
        };
    })
;