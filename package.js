Package.describe({
  summary: "Search, replace, and refactor your JavaScript code based on its structure rather than its text."
});

Npm.depends({
  "grasp": "0.2.1"
});

Package.on_use(function (api, where) {
  api.add_files('grasp.js', 'server');
  api.export('Grasp');
});

Package.on_test(function (api) {
  api.use('grasp');
  api.add_files('grasp_tests.js', ['client', 'server']);
});
