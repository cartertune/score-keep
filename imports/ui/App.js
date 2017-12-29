import * as React from "react";
import TitleBar from "./TitleBar";
import PlayersList from "./PlayersList";
import AddPlayer from "./AddPlayer";


export default class App extends React.Component {

    render() {

        return (
            <div>
                <TitleBar title={this.props.title}/>
                <div className="wrapper">
                    <PlayersList players={this.props.players}/>
                    <AddPlayer/>
                </div>


            </div>
        )
    }
}