var fs = require('fs');
var readline = require('readline');
var cp = require('child_process');
var path = require('path');
var index = require('./templatedocs/index.html');
var styles = require('./templatedocs/styles.css');

var week = '',
    day = '',
    projectName ='',
    weekDirectory = '',
    dayDirectory = '';

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What week is it (Number Form)?", function(answer){
  week = answer;
  weekDirectory = "Week" + week;
  rl.question("What day is it (Number Form)?", function(answer){
    day = answer;
    dayDirectory = "Day" + day + "_W" + week;
    rl.question("What is the project name?", function(answer){
      projectName = answer;

      //Make week directory
      if(fs.existsSync(weekDirectory)) {
        console.log('The Week directory already exists');
      }
      else {
        fs.mkdirSync(weekDirectory);
        console.log("Week Directory Created");
      }

      //Make Day directory
      if(fs.existsSync(weekDirectory + '/' + dayDirectory)) {
        console.log('The Day directory already exists');
      }
      else {
        fs.mkdirSync(weekDirectory + '/' + dayDirectory);
        console.log("Day Directory Created");
      }

      //Make project directory
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName)) {
        console.log('The Project directory already exists');
      }
      else {
        fs.mkdirSync(weekDirectory + '/' + dayDirectory + '/' + projectName);
        console.log("Project Directory Created");
      }

      //Make index.html
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName + '/index.html')) {
        console.log('The index.html file already exists');
      }
      else {
        fs.writeFile(weekDirectory + '/' + dayDirectory + '/' + projectName + '/index.html', index);
        console.log("index.html File Created");
      }

      //Make styles.css
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName + '/styles.css')) {
        console.log('The styles.css file already exists');
      }
      else {
        fs.writeFile(weekDirectory + '/' + dayDirectory + '/' + projectName + '/styles.css', styles);
        console.log("styles.css File Created");
      }

      //Make app.js
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName + '/app.js')) {
        console.log('The app.js file already exists');
      }
      else {
        fs.writeFile(weekDirectory + '/' + dayDirectory + '/' + projectName + '/app.js', index);
        console.log("app.js File Created");
      }

      //Make mainCtrl.js
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName + '/mainCtrl.js')) {
        console.log('The mainCtrl.js file already exists');
      }
      else {
        fs.writeFile(weekDirectory + '/' + dayDirectory + '/' + projectName + '/mainCtrl.js', index);
        console.log("mainCtrl.js File Created");
      }

      //Make mainService.js
      if(fs.existsSync(weekDirectory + '/' + dayDirectory + '/' + projectName + '/mainService.js')) {
        console.log('The mainService.js file already exists');
      }
      else {
        fs.writeFile(weekDirectory + '/' + dayDirectory + '/' + projectName + '/mainService.js', index);
        console.log("mainService.js File Created");
      }


      process.exit();
    });
  });
});
