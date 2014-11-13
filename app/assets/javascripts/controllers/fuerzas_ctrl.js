RedWedding.controller('FuerzasCtrl', function($scope, $http) {

  var view = {
    title: "Bienvenidos a la Red Wedding, sangre correrá",
    fuerzas: [],
   
    classByType: function(fuerza) {
      
      if(fuerza.type === 'Aerea') {
        return 'primary-bg';
      } else if(fuerza.type === 'Naval') {
        return 'secondary-bg';
      } else if(fuerza.type === 'Terrestre') {
        return 'third-bg';
      }

      return '';
    }
  };

  $scope.view = view;
  
  var asignarFuerzas = function(response) {
    view.fuerzas = response.data.fuerzas;
  };

  $http.get('/fuerzas.json').then(asignarFuerzas);
});