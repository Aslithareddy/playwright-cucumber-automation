module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    publishQuiet: true
  }
};
