var hCardApp = angular.module('hCardApp', []);

hCardApp.controller('hCardController', function($scope) {

    function createHCard() {
        // Here there would be a service call so send 
        // a request to the server if needed

        console.log('hCard Created!');
    }

    // read the new file and rerender the image based on the selected data
    document.getElementById("fileBtn").onchange = function() {

        var reader = new FileReader();

        reader.onload = function(e) {
            //  update the image source 
            document.getElementById("userAvatar").src = e.target.result;
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };

    $scope.createHCard = createHCard;
});
