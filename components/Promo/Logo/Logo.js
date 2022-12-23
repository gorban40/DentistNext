import logo from '../../../public/images/icons/logo/logo.png';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className="logo">
            <Image width="100%" height="100%" className="logo__img" src={logo} alt="logo" />
            <h1 className="logo__title"><span>Час</span><br></br> Красивих <span>Зубів</span></h1>
        </div>
    )
}

export default Logo;