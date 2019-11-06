Package.describe({
    name: 'nasuke:simple-paginator',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Simple paginator for arrays in meteor',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/nasuke0302/simple-paginator.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.8.1');
    api.use('ecmascript');
    api.mainModule('simple-paginator.js');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('nasuke:simple-paginator');
    api.mainModule('simple-paginator-tests.js');
});