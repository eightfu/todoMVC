/**
 * Created by Administrator on 2016/10/22.
 */
(function(){
	var controllerModule=angular.module('todoApp.controller',['ngRoute','todoApp.service','todoApp.directive']);
	controllerModule.controller('mainCtrl',['$scope','$location','$routeParams','mainService',function($scope,$location,$routeParams,mainService){
		//绑定输入框的信息
		$scope.text='';
		//所有信息的列表数据
		$scope.todoList=mainService.getToDoList();
		//
		$scope.saveValue=function(){
			mainService.save();
		}
		//添加todolist
		$scope.addTodo=function(event){
			if($scope.text==0){return};
			mainService.addTodo($scope.text);
			//清空输入框
			$scope.text='';
		};
		//删除todolist
		$scope.removeTodo=function(index){
			mainService.removeTodo(index);
		};
		//编辑todolist
		$scope.editIndex=-10;//确保跟$index不重复
		$scope.editTodo=function(index){
			$scope.editIndex=index;
		};
		//保存编辑的数据
		$scope.saveTodo=function(){
			//if(event.keyCode==13){
				$scope.editIndex=-10;
			//};
		};
		//获取未完成的条数
		$scope.leftCount=function(){
			var count=mainService.leftCount();
			$scope.allChecked=!count;
			return count;
		}
		//点击按钮,全选的事件
		$scope.toggleAll=function(){
			mainService.toggleAllCompleted($scope.allChecked);
		};
		//是否显示删除已完成事件的按钮
		$scope.existCompleted=function(){
			return mainService.existCompleted();
		}
		//删除已完成事件
		$scope.clearCompleted=function(){
			mainService.clearCompleted();
		}
		//1.点击事件,但无法记录锚点,链接重新打开,会返回首页
		//	全部todo
		//	$scope.all=function(){
		//		$scope.search='';
		//	}
		//	未完成todo
		//	$scope.active=function(){
		//		$scope.search={completed:false};
		//	}
		//已完成todo
		//$scope.completed=function(){
		//	$scope.search={completed:true};
		//}

		//	2.监测锚点
		//	console.log($location);
		//	$scope.location=$location;
		//	$scope.$watch('location.path()',function(){
		//		switch($location.path()){
		//			case '/active':
		//				$scope.search={completed:false};
		//				break;
		//			case '/completed':
		//				$scope.search={completed:true};
		//				break;
		//			default:
		//				$scope.search='';
		//				break;
		//		}
		//	});
		$scope.status=$routeParams.status || '';
		switch($routeParams.status){
			case 'active':
				$scope.search={completed:false};
				break;
			case 'completed':
				$scope.search={completed:true};
				break;
			default:
				$scope.search='';
				break;
		}
	}]);
})();
