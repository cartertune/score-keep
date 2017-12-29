import * as React from "react";
import {Players} from "../api/players";


export default class AddPlayer extends React.Component {


    static addPlayer(e) {
        let playerName = e.target.playerName.value;

        e.preventDefault();

        if (playerName) {
            Players.insert({
                    name: playerName,
                    score: 0
                }
            );
            e.target.playerName.value = '';
        }
    }

    render() {
       return <div className="item">
            <form onSubmit={AddPlayer.addPlayer} className='form'>
                <input className='form__input' type = "text" name="playerName" placeholder = "Player Name"/>
                <button className='button'> Add new Player</button>
            </form>
        </div>
    }
}
