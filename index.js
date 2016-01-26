module.exports = `
<!DOCTYPE html>
<html ng-app="">
  <head>
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">

    <header>

    </header>

    <div class="main">

      <ui-view></ui-view>

    </div>

    <footer>

    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.js"></script>
    <script src="app.js"></script>
    <script src="mainCtrl.js"></script>
    <script src="mainService.js"></script>
  </body>
</html>
`
