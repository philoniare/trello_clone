var app = angular.module('mainApp', []);
app.factory('TrelloHelper', function() {
    var buildIndex = function(source, property) {
        // Creates a hash based property => object array
        // Overrides with hash key collision
        var tempArr = [];
        for(var i = 0, len = source.length; i < len; ++i) {
            tempArr[source[i][property]] = source[i];
        }
        return tempArr;
    };
    return {
      buildIndex: buildIndex
    };
});

app.service('TrelloModel', function() {
    var service = this;
    stories = [
        {
            title: 'First story',
            description: 'Our first story.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Second story',
            description: 'Do something.',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Another story',
            description: 'Just one more.',
            criteria: 'Criteria pending.',
            status: 'Code Review',
            type: 'Enhancement',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        }
    ];
    service.getStories = function() {
      return stories;
    };
});


app.controller('MainCtrl', function(TrelloModel) {
    var main = this;
    main.stories = TrelloModel.getStories();
    main.createStory = function() {
        main.stories.push({
            title: "New Story",
            description:'Description pending.',
            criteria:'Criteria pending.',
            status:'Back Log',
            type:'Feature',
            reporter:'Pending',
            assignee:'Pending'
        });
    };

    main.setCurrentStory = function(story) {

    };

});
app.directive('story', function() {
    return {
        stope: true,
        replace: true,
        template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
    }
});

