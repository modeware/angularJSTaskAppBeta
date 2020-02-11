app.component('taskList',{
templateUrl:'mainModule/taskListTemplate.html',
controller:function TaskListController($scope){
    var self=this
    $scope.taskArray=[]
    $scope.deletedTasks=[]
    self.validateAndTask=function(name, task){
        if(name && task){
            self.addTask(name,task)
        }

    }
    $scope.checkName=function(name){
       if(!name){
        $scope.nameColor="red"
        $scope.nameWarning="****************Please Enter Name"
       }
       else{
       $scope.nameWarning=""
       }

    }
    $scope.checkTask=function(task){
        if(!task){
         $scope.taskColor="red"
         $scope.taskWarning="****************Please Enter Task"
        }
        else{
        $scope.taskWarning=""
        }
        }



    self.addTask=function(name, task){
            var taskObj={   name:name,
                            task:task,
                            isChecked:false}

                $scope.taskArray.push(taskObj)
                $scope.name=""
                $scope.task=""
                }
          $scope.addToDeleteArray=function(task){
                deletedTasks.push(task)
             }
                }
               })