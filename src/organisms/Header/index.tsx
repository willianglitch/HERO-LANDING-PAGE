import Logo from '../../molecules/Logo'
import Button from '../../stoms/Button'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
    return <S.Box>
        <Logo />
        <Menu />
        <Button />
    </S.Box>
}

export default Header