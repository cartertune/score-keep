import * as React from "react";
import {Players} from "../api/players";


export default class Player extends React.Component {

    render() {

        let className = 'item item--position-' + this.props.player.rank;

        return <div  key={this.props.player.id} className={className}>
            <div className="player">
                <div>
                    <h3 className="player__name">{this.props.player.name} </h3>
                    <p className="player__stats">
                        {this.props.player.position} place: {this.props.player.score} points.</p>
                </div>
                <div className="player__actions">
                    <button className='button button--round' onClick={
                        () => Players.update({_id: this.props.player._id}, {
                            $inc: {score: 1}})
                    }> +1 </button>
                    <button className='button button--round' onClick={
                        () => Players.update({_id: this.props.player._id}, {
                            $inc: {score: -1}})
                    }> -1 </button>
                    <button className='button button--round' onClick={
                        () => Players.remove({_id: this.props.player._id})
                    }> X </button>
                </div>

            </div>
        </div>
    }

}