/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
	angular.module('todoApp.directive',[]).directive('focus',['$timeout',function($timeout){
		return{
			link:function(scope,ele,attr){
				scope.$watch(attr.focus,function(now){
					if(now){
						$timeout(function(){
							ele[0].focus();
						},0);
					}
				})
			}
		}
	}])
})();
