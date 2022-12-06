import * as S from './styles'
import HeroHeaderImg from '../../assets/HeroHeaderImg.svg'
import CardActivity from '../../molecules/CardActivity'
import CardChart from '../../molecules/CardChart'

export const ProductStactus = () => {
    return(
        <S.Container>
            <CardActivity />
            <CardChart />
            <img src={HeroHeaderImg} alt="Uma mulher fazendo uma pesquisa em seu dispositivo eletronico" />
        </S.Container>
    )
}

export default ProductStactus