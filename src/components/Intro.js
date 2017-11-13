import React from 'react';
import Legal from './Legal';
import MdStars from 'react-icons/lib/md/stars'

export default class Intro extends React.Component {
	render() {

		return (
            <div>
                <span className='score top-score'>
                    <MdStars /> Top Score: {this.props.topScore}
                </span>
                <div className='intro'>
                    <h2>Asteroids</h2>
                    <button
                        className='infoButton'
                        onClick={ this.props.startGame }>
                        S T A R T
                    </button>
                </div>
                <Legal/>
            </div>
		);
	}
}