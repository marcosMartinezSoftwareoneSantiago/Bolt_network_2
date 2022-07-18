app.controller('MainController', ['$scope', function($scope) {
    $scope.program = { 

        series: "Sherlock", 
        series_img: "img/sherlock.jpg", 
        genre: "Crime Empty Hearse", 
        season: 3, 
        episode: "The Empty Hearse", 
        description: "Two year after his reported Reichenbach Fall demise, Sherlock, who has been cleared of al fraud changes against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up th eHouses of Parliament during an all night sitting on Guy Fawkes Night.", 
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)

    }
    $scope.anotherProgram = { 

        series: "Community", 
        series_img: "img/community.png", 
        genre: "Sitcom", 
        season: 1, 
        episode: "Pilot", 
        description: "A fraudulent lawyer is starting to study at a community university called Greendale", 
        datetime: new Date(2009, 09, 17, 20, 00, 00, 00)
        
    }
  }]);