var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope){
  $scope.educations=[{
     "No":"1",
     "Pos":"Bachelors",
     "Year":"2014-Current",
     "Institute":"SEECS, NUST",
     "Grade":"3.40",
     "Major":"Software Engineering",
     "Last":" "
    },
    {
       "No":"2",
       "Pos":"A Levels",
       "Year":"2012-2014",
       "Institute":"Beaconhouse School System",
       "Grade":"3 As",
       "Major":"Math & Sciences",
       "Last":" "
    },
    {
       "No":"3",
       "Pos":"O Levels",
       "Year":"2009-2012",
       "Institute":"Beaconhouse School System",
       "Grade":"8 As",
       "Major":"Math & Sciences",
       "Last":"last"
    }
  ];
  $scope.experiences=[{
     "No":"1",
     "Pos":"Designer",
     "Year":"2016-Current",
     "Institute":"Diode",
     "Grade":" ",
     "Major":" ",
     "Last":" "
   },
   {
     "No":"2",
     "Pos":"Designer",
     "Year":"2016-2017",
     "Institute":"NIMUN",
     "Grade":" ",
     "Major":" ",
     "Last":" "
   },
   {
      "No":"3",
      "Pos":"Head Designer",
      "Year":"2016-2017",
      "Institute":"IEEE SEECS",
      "Grade":" ",
      "Major":" ",
      "Last":"last"
     }
  ];
});