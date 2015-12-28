



function loginController($window,$scope,$http)
{
    
    
    
    
    
    $scope.login = function(){
        
        if($scope.userName=="admin" && $scope.password=="admin")
        {
            
            window.location.href = 'DashBoard.html';
            
        }
        else
        {
            alert("Fail");
        }
        
           };
}

