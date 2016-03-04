export class View2Controller{

  /*@ngInject*/
  constructor($scope, uiGridConstants){
    $scope.gridOptions = {
      enableSorting: true,
      enableFiltering: true,
      showColumnFooter: true,
      columnDefs: [
        { name:'Team Name', field: 'teamName'},
        { name:'Matches Played', field: 'matchesPlayed'},
        { name:'Wins', field: 'wins'},
        { name:'Losses', field: 'losses'}
      ],
      enableGridMenu: true,
      enableSelectAll: true,
      exporterCsvFilename: 'team-data.csv',
      exporterMenuPdf: false,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
      }
    };

    $scope.gridOptions.data = [
      {
        "teamName": "Team A",
        "matchesPlayed": 100,
        "wins": 50,
        "losses": 50
      },
      {
        "teamName": "Team B",
        "matchesPlayed": 90,
        "wins": 30,
        "losses": 60
      },
      {
        "teamName": "Team C",
        "matchesPlayed": 100,
        "wins": 70,
        "losses": 30
      }
    ];

    $scope.myDataSet = [{
      data: [{
        mno: 'Team A',
        value: 50
      }, {
        mno: 'Team B',
        value: 30
      }, {
        mno: 'Team C',
        value: 70
      }],
      name: 'Wins'
    }, {
      data: [{
        mno: 'Team A',
        value: 50
      }, {
        mno: 'Team B',
        value: 60
      }, {
        mno: 'Team C',
        value: 30
      }],
      name: 'Losses'
    }];


  }

}
