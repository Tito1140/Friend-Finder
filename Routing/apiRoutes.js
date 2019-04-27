var friendData = require("../data/friends.js");
var match = require("../data/friends.js");

module.exports = function (app) {
    app.get("/data/friends", function (res, req) {
        res.json(friendData);
    });

    app.post("/data/friends", function (res, req) {
        var newUser = req.body;

        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i]);
        }
        var maxDiff = 0;

    });
}

