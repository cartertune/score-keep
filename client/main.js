import React from 'react';

import ReactDOM from 'react-dom';

import {Meteor} from 'meteor/meteor';
import {Players} from "../imports/api/players";
import {rankedPlayers} from "../imports/api/players";

import App from "../imports/ui/App";


Meteor.startup( () => {

    let title = 'Score Keep';


    Tracker.autorun(() => {

        let players = rankedPlayers(Players.find({}, {sort: {score: -1}}).fetch());


        ReactDOM.render(<App title={title} players={players}></App>, document.getElementById('app'));
    })
});