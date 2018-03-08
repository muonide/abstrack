var express = require('express');
var router = express.Router();

var featuredMission = {
    id: 50,
    isFeature: true,
    date:'April 25, 2017',
    title: 'ABS-50',
    subtitle: 'Howl at the Moon 2',
    description: 'ABS-50 marked the 50th launch from Arkansas BalloonSAT and took place in Central Missouri during the 2017 Great American Eclipse',
    body: 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis. Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.',
    featuredImage:'http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg',
    images: [
        "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-prep.jpg",
        "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg",
        "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-1.jpg",
        "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-2.jpg",
        "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-4.jpg"
    ]
}
var tempMissions = [
    {
        id: 49,
        date:'April 21, 2017',
        title: 'ABS-49',
        subtitle: 'Eclipse Practice Run',
        description: 'ABS-49 was a test of 2017 Eclipse Ballooning Project equipment',
        body: 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis. Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.',
        featuredImage:'images/abs49.jpg',
        images: [
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-prep.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-1.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-2.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-4.jpg"
        ]
    },
    {
        id: 48,
        date:'April 21, 2017',
        title: 'ABS-48',
        subtitle: 'Video Streaming',
        description: 'ABS-48 was a test of 2017 Eclipse Ballooing Project video streaming equipment',
        body: 'Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis. Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.',
        featuredImage:'images/abs48.jpg',
        images: [
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-prep.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/Arkansas_-_Best_Picture_ilq6oj.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-1.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-2.jpg",
            "http://res.cloudinary.com/arballoonsat/image/upload/v1504696806/abs50-4.jpg"
        ]
    }
];

var emptyMission = {

    id: -1,
    date:'',
    title: 'Mission Not Found',
    description: '',
    body: '',
    featuredImage:'',
    images: []

}


router.get('/', function(req, res, next){

    if(req.query.id)
    {
        //simulation of database query to get mission information
        var missID = req.query.id;
        var mission = emptyMission;

        tempMissions.forEach(function(miss)
        {
            
            if(missID == miss.id)
            {
                mission = miss;
            }

        });

        if(missID == featuredMission.id)
        {
            mission = featuredMission;
        }

        res.render('mission/missiontemplate', { mission, title: mission.title} );
    }
    else
    {
        var missions = tempMissions;
        res.render('mission/missions', {title: 'Missions', missions, featuredMission});
    }

});

module.exports = router;