const app = angular.module('contactApp', []);


app.controller('appCtrl', ['$scope','$http', ($scope,$http) => {
  
  $scope.currentView = 'listView';
  $scope.editIndex = '';
  $scope.deleteIndex = '';
  $scope.contacts = data;

  $scope.changeView = (val) => {
    $scope.currentView = val;
  };

  $scope.addContact = (contact) => {
    if (contact) {
      let newContact = {
        firstname: contact.firstname.value,
        lastname: contact.lastname.value,
        phoneNumber: contact.phoneNumber.value,
      };
      $scope.contacts.push(newContact);
      $scope.changeView('listView');
    }
    else {
      alert("Form incomplete! Please fill out all relevant information before submitting.")
    }

  };

  $scope.editContact = (index) => {
    $scope.edit = $scope.contacts[index];
    $scope.editIndex = index;
    $scope.changeView('editView');
  }

  $scope.submitEdit = (contact) => {
    if (contact) {
      let editContact = {
        firstname: contact.firstname,
        lastname: contact.lastname,
        phoneNumber: contact.phoneNumber
      };
      $scope.contacts[$scope.editIndex] = editContact;
      $scope.changeView('listView');
    }
    else {
      alert("Form incomplete! Please fill out all relevant information before submitting.")
    }
  };

  $scope.deleteContact = (index) => {
    $scope.delete = $scope.contacts[index];
    $scope.deleteIndex = index;
    $scope.changeView('deleteView');
  };

  $scope.submitDelete = () => {
    let index = $scope.deleteIndex;
    $scope.contacts.splice(index, 1);
    $scope.changeView('listView');
  };

}]);
