module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: [
      'progress',
      'json:reports/cucumber-report.json',
      'rerun:reports/rerun.txt'
    ],
    publishQuiet: true
  },

  ci: {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    paths: ['features/**/*.feature'],
    retry: 2,
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    publishQuiet: true
  }
};
