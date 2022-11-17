import { useSpring, animated } from 'react-spring';
import './SkillsIcons.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.02];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const SkillsIcons = ({ img, label }) => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
        <div className='skillsContainer'>
            <animated.div
                className='skillsIcon'
                onMouseMove={({ relatedTarget: x, relatedTarget: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <img
                    src={img}
                    alt='html 5 logo'
                    style={
                        label === 'EXPRESS JS' || label === 'NATIVE' ? {width: '75%'} 
                        : label === 'FIREBASE' ? {width: '45%'} 
                        : {width: '60%'}
                    }
                />
            </animated.div>
            <p className='skillLabel mt-2'>{label}</p>
        </div>
    );
};

export default SkillsIcons;