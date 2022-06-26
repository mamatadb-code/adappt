import React, { Component } from 'react';
import './ChangeSchedule.css';


class ChangeSchedule extends Component {

constructor(){
    super()
    this.state = {
        work:'from office'
    }
}
changeMyWorkPlace(){
    if (this.state.work === 'from office') {
        this.setState({
            work:'from home'
        })
    } else {
        this.setState({
            work:'from office'
        })
    }
}

    render(){
        return(
            <div>
                <div class="schedule change">
                    <p>Emplyoee Name: </p>
                    <h3>Today Pooja is work {this.state.work}</h3>
                    <button class="chageScheduleBtn " onClick = {()=> this.changeMyWorkPlace()}> Change My Schedule </button>
                </div>

            </div>
        )
    }
}

export default ChangeSchedule;