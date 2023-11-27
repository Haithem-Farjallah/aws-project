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
      .when("/addblog", {
        templateUrl: "views/addBlog.html",
        controller: "SBController",
      })
      .when("/blog/:blogId", {
        templateUrl: "views/blog.html",
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
  "$routeParams",
	"$http",
  function ($scope, $routeParams, $http) {
    // $scope.isDropdownVisible = false;

    // $scope.toggleDropdown = function (event) {
    // 	event.stopPropagation(); // Prevent the click event from reaching the document click handler
    // 	$scope.isDropdownVisible = !$scope.isDropdownVisible;
    // };

    // $scope.dropdownOptions = [
    // 	{ label: 'New to Old', action: function () { $scope.optionClicked('Option 1'); } },
    // 	{ label: 'Old to New', action: function () { $scope.optionClicked('Option 2'); } },
    // 	{ label: 'By Author', action: function () { $scope.optionClicked('Option 3'); } }
    // ];

    // $scope.selectOption = function (option) {
    // 	option.action(); // Execute the action associated with the selected option
    // 	$scope.isDropdownVisible = false; // Close the dropdown after selecting an option
    // };

    // $scope.optionClicked = function (optionLabel) {
    // 	order = 'name';
    // };

    $scope.blogs = [
      {
        id: 1,
        title: "Valorant Knives",
        author: "Shaurya",
        thumbnail: "images/1.png",
        short_description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
													scrambled it to make a type specimen book.`,
        description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.
				`,
      },
      {
        id: 2,
        title: "Valorant Agents",
        author: "Shaurya",
        thumbnail: "images/2.png",
        short_description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.`,
        description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.
				`,
      },
      {
        id: 3,
        title: "Valorant Maps",
        author: "Sandeep",
        thumbnail: "images/3.png",
        short_description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
													since the 1500s, when an unknown 
													printer took a galley of type and 
													scrambled it to make a type specimen book.`,
        description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.
				`,
      },
      {
        id: 4,
        title: "Valorant Guns",
        author: "Gita",
        thumbnail: "images/4.png",
        short_description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.`,
        description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.
				`,
      },
      {
        id: 5,
        title: "Valorant Tracker",
        author: "Shaurya",
        thumbnail: "images/5.png",
        short_description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.`,
        description: `Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.<br/>
				Lorem Ipsum is simply dummy 
				text of the printing and typesetting 
				industry. Lorem Ipsum has been the 
				industry's standard dummy text ever 
				since the 1500s, when an unknown 
				printer took a galley of type and 
				scrambled it to make a type specimen book.
				`,
      },
    ];
    // Get the selected blog ID from the URL
    var blogId = $routeParams.blogId;

    // Find the selected blog
    $scope.selectedBlog = $scope.blogs.find(function (blog) {
      return blog.id == blogId;
    });

    $scope.customFilter = function (blog) {
      if (!$scope.search) {
        return true; // Show all blogs when search is empty
      }
      const searchText = $scope.search.toLowerCase();
      return (
        blog.title.toLowerCase().includes(searchText) ||
        blog.author.toLowerCase().includes(searchText)
      );
    };

    $scope.items = $scope.blogs.length;

    $scope.addBlog = function () {
      $scope.blogs.push({
        id: ++$scope.items,
        title: $scope.newBlog.title,
        author: $scope.newBlog.author,
        thumbnail: "images/fixed.jpg",
        short_description: $scope.newBlog.short_description,
        description: $scope.newBlog.description
			});

      $scope.newBlog = {
				title: "",
				author: "",
				short_description: "",
				description: "",
			};

			console.log($scope.blogs)
    };

		// remove blog
		$scope.removeBlog = function(blog){
			let removedBlog = $scope.blogs.indexOf(blog);
			$scope.blogs.splice(removedBlog, 1);
		};
  },
]);
