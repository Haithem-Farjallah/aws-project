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
      // .when("/addblog", {
      //   templateUrl: "views/addBlog.html",
      //   controller: "SBController",
      // })
      // .when("/blog/:blogId", {
      //   templateUrl: "views/blog.html",
      //   controller: "SBController",
      // })
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
      thumbnail: "https://c4.wallpaperflare.com/wallpaper/792/90/510/lenovo-legion-5-hd-wallpaper-preview.jpg",
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
