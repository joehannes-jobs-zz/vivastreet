import storyTpl from "views/pages/story.jade!";
import setupTpl from "views/pages/setup.jade!";
import gameTpl from "views/pages/game.jade!";
import goodbyeTpl from "views/pages/goodbye.jade!";

var routes = {
    intro: {
    	template: storyTpl,
    	url: ""
    },
    setup: {
    	controller: "Setup",
        template: setupTpl,
        url: "setup"
    },
    game: {
    	controller: "Game",
    	template: gameTpl,
    	url: "game"
    },
    goodbye: {
    	template: goodbyeTpl
    }
};

export default routes;