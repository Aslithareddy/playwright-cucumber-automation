const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../reports/cucumber-report.json'),
  output: path.join(__dirname, '../reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': 'Demo',
    'Test Environment': 'QA',
    'Browser': 'Chromium',
    'Platform': process.platform,
    'Executed By': 'QA Automation'
  }
};

reporter.generate(options);
