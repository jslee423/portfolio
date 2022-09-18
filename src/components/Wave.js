import wave from '../assets/images/wave.png';
import waveColor from '../assets/images/waveColor.png';
import './Wave.css';

const Wave = ({ color, rev, top }) => {
    let classes = 'wave';
    if (rev) {
        classes += ' waveRev';
    }
    if (top) {
        classes += ' waveTop'
    }

    return (
        <img src={color ? waveColor : wave} alt='wavebg' className={classes} />
    );
};

export default Wave;