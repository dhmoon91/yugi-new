var app = angular.module('movieApp', ['angularUUID2','ngCookies','ngAnimate','ui.router','homeController','navigationController','landing','faqController','productController'] );

app.config(function($stateProvider, $urlRouterProvider,$locationProvider){
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('landing', {
    url:'/',
    // templateUrl: 'views/home.html',
    views: {
      'navigation': {
        templateUrl: 'views/landing.html',
        controller: 'LandingController'
      }
    }
  })


  .state('home', {
    url:'/home',
    // templateUrl: 'views/home.html',
    views: {
      'navigation': {
        templateUrl: 'views/navigation.html',
        controller: 'NavigationController'
      },
      '@': {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      },
      'footer': {
        templateUrl: 'views/footer.html'
      }
    }
  })

  .state('faq', {
    url:'/faq',
    // templateUrl: 'views/home.html',
    views: {
      'navigation': {
        templateUrl: 'views/navigation.html',
        controller: 'NavigationController'
      },
      '@': {
        templateUrl: 'views/faq.html',
        controller: 'FaqController'
      },
      'footer': {
        templateUrl: 'views/footer.html'
      }
    }
  })
  .state('product', {
    url:'/product',
    // templateUrl: 'views/home.html',
    views: {
      'navigation': {
        templateUrl: 'views/navigation.html',
        controller: 'NavigationController'
      },
      '@': {
        templateUrl: 'views/product.html',
        controller: 'ProductController'
      },
      'footer': {
        templateUrl: 'views/footer.html'
      }
    }
  })


  // .state ('home.search', {
  //   url:'search',
  //   views: {
  //     '@': {
  //       templateUrl: 'views/search.html',
  //       controller:'SearchController'
  //     }
  //   }
  // })



});
