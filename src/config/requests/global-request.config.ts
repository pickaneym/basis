

// Function for settting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://www.google.com');
    RestangularProvider.setPlainByDefault(true);
}
