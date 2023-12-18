let shauryasBlogsApp = angular.module("shauryasBlogsApp", ["ngRoute"]);

// routing
shauryasBlogsApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home.html",
      })
      .when("/blogs", {
        templateUrl: "views/blogs.html",
        controller: "SBController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

// controllers
shauryasBlogsApp.controller("SBController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    // Initialize newBlog
    $scope.newBlog = {
      title: "",
      author: "",
      thumbnail: "",
      short_description: "",
      description: "",
    };

    // Retrieve blogs from the backend
    $http.get("http://localhost:3000/api/blogs").then((response) => {
      $scope.blogs = response.data;
    });

    // Function to refresh the list of blogs from the backend
    $scope.refreshBlogs = function () {
      $http.get("http://localhost:3000/api/blogs").then((response) => {
        $scope.blogs = response.data;
      });
    };

    // Add a new blog
    $scope.addBlog = function () {
      console.log($scope.newBlog);
      $http
        .post("http://localhost:3000/api/blogs", $scope.newBlog)
        .then((response) => {
          $scope.newBlog.id = response.data.id;
          $scope.blogs.push($scope.newBlog);
        });
      // Clear the form
      $scope.newBlog = {
        title: "",
        author: "",
        short_description: "",
        description: "",
      };
    };

    // Remove blog from the backend
    $scope.removeBlog = function (blog) {
      let removedBlog = $scope.blogs.indexOf(blog);
      $http.delete(`http://localhost:3000/api/blogs/${blog.id}`).then(() => {
        $scope.blogs.splice(removedBlog, 1);
      });
      $scope.refreshBlogs();
    };
  },
]);
