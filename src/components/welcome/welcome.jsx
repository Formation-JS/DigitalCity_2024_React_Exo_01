import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './welcome.module.scss';

const Welcome = ({ name, age }) => {

    const titleStyle = clsx(style['welcome'], style['welcome-title']);

    const ageStyle = clsx({
        [style.welcome]: true,
        [style['welcome-age']]: true,
        [style.age1]: age < 18,
        [style.age2]: age >= 18,
    });

    return (
        <>
            {/* <p className={style['welcome'] + ' ' + style['welcome-title']}> */}
            <p className={titleStyle}>
                Bienvenue {name} sur l'application React
            </p>
            <p className={ageStyle}>
                Vous avez {age} ans !
            </p>
            {age < 18 && (
                <p>N'oublie pas de boire ta soupe 🥣</p>
            )}
        </>
    );
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

Welcome.defaultProps = {
    age: 18
};

export default Welcome;