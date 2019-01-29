import React from 'react';
import '../../styles/style.css';
import '../../styles/controlPanel.css';
import { isMobileDevice } from '../../util/helpers';

import MdArrowBack from 'react-icons/lib/md/arrow-back'
import MdArrowUpward from 'react-icons/lib/md/arrow-upward'
import MdArrowForward from 'react-icons/lib/md/arrow-forward'
import MdArrowDownward from 'react-icons/lib/md/arrow-downward'
import MdGpsFixed from 'react-icons/lib/md/gps-fixed'
import FaShield from 'react-icons/lib/fa/shield'

export default class ButtonsPanelClassic extends React.Component {
    render() {
        let buttonsLayer;
        let keysHelp;

        if(!isMobileDevice()) {
            keysHelp = (
                <div className='help-info instructions'>
                Use [A][W][D] or [<MdArrowBack />][<MdArrowUpward />][<MdArrowForward />] to MOVE<br/>
                Use [SPACE] to SHOOT<br/>
                Use [S] or [<MdArrowDownward />] to SHIELD<br/>
                </div>
            );
        } else {
            buttonsLayer = (
                <div>
                    <button id='left' className='actionButton btnLeft' 	{...this.props.customEvents}> 	<MdArrowBack />		</button>
                    <button id='up' className='actionButton btnUp' 		{...this.props.customEvents}>	<MdArrowUpward />	</button>
                    <button id='right' className='actionButton btnRight' 	{...this.props.customEvents}>	<MdArrowForward />	</button>
                    <button id='shoot' className='actionButton btnShoot' 	{...this.props.customEvents}>	<MdGpsFixed />		</button>
                    <button id='shield' className={(this.props.currentShield <= 0) ? 'disabledButton btnShield' : 'actionButton btnShield'}
                        {...this.props.customEvents}>	<FaShield />
                    </button>
                </div>
            );
        }
        return (
            <div>
				{keysHelp}
                {buttonsLayer}
            </div>
        );
    }
}
