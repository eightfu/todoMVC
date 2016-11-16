/**
 * Created by Administrator on 2016/10/22.
 */
(function(){
	var serviceModule=angular.module('todoApp.service',[]);
	//创建服务
	serviceModule.service('mainService',['$window',function($window){
	//	数组
		var todoList=$window.localStorage['todo']?angular.fromJson($window.localStorage['todo']):[];
		this.save=function(){
			$window.localStorage['todo']=angular.toJson(todoList);
		}
	//	获取接口数据
		this.getToDoList=function(){
			return todoList;
		};
	//	添加数据
		this.addTodo=function(text){
			var id=new Date().getTime();
			todoList.push({text:text,completed:false,id:id});
			this.save();
		};
	//	删除数据
		this.removeTodo=function(index){
			todoList.splice(index,1);
			this.save();
		};
	//	获取未完成的条数
		this.leftCount=function(){
			var count=0;
			for(var i= 0;i<todoList.length;i++){
				if(todoList[i].completed!=true){
					count++;
				}
			};
			return count;
		};
		//点击按钮,全选的事件
		this.toggleAllCompleted=function(status){
			for (var i = 0; i < $scope.todoList.length; i++) {
				todoList[i].completed = !status;
			};
		}
	//显示已删除已完成的按钮
		this.existCompleted=function() {
			for(var i= 0;i<todoList.length;i++){
				if(todoList[i].completed){
					return true;
				}
			}
			return false;
		};
	//	删除已完成事件
		this.clearCompleted=function(){
			//var temp=[];
			for(var i= 0;i<todoList.length;i++){
				if(todoList[i].completed){
					//拿到所有未完成的事件
					//temp.push(todoList[i]);
					todoList.splice(i,1);
					i--;
				}
			}
			//todoList=temp;
			this.save();
		}
	}]);
})();
