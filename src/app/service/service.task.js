angular.module('dojo.service.task', [])
    .service('taskService', function ($log) {
        var self = {};

        // Initialization
        $log.debug('Loading tasks from local storage.');
        var tasks = [];
        var storedValue = localStorage.getItem('dojoItems');
        if (storedValue) {
            tasks = angular.fromJson(storedValue);
        }

        self.save = function () {
            localStorage.setItem('dojoItems', angular.toJson(tasks));
        };

        self.tasks = function () {
            return tasks;
        };

        self.createTask = function (text) {
            tasks.push({
                text: text,
                done: false
            });
            self.save();
        };

        self.deleteTask = function (task) {
            var i = tasks.indexOf(task);
            if (i >= 0) {
                tasks.splice(i, 1);
                self.save();
            }
        };

        return self;
    })
;