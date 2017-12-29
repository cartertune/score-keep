
import React from 'react'
import Player from "./Player";
import FlipMove from "react-flip-move";

export default class PlayersList extends React.Component {



    renderPlayers() {

        if (this.props.players.length === 0) {

            return <div className="item"><p>Please enter your first player to get started!</p></div>
        }

        return (this.props.players.map((p) => {
                return <Player key={p._id} player={p}/>})
        )



    }
    render() {

        return (
            <div>
                <FlipMove>
                    {this.renderPlayers()}
                </FlipMove>


            </div>

    )
    }
}