var express = require('express');
var router = express.Router();

var miss = {
    id: 50,
    date:'April 25, 2017',
    title: 'ABS-50',
    description: 'Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.',
    body: 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis. Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.',
    featuredImage:'http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg',
    images: [
      "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-prep.jpg",
      "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg",
      "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-1.jpg",
      "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-2.jpg",
      "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-4.jpg"
    ]
};


router.get('/', function(req, res, next){

    var l = undefined;
    //console.log(req.query.id);

    if(req.query.id)
    {
        l = req.query.id;
        var mission = miss;
        res.render('mission/missiontemplate', { mission, title: mission.title} );
    }
    else
    {
        res.render('mission/missions', {title: 'Missions'});
    }

});

module.exports = router;