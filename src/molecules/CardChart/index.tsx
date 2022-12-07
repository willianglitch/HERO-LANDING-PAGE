import * as S from './styles'
import FirstArrow from '../../assets/FirstArrow.svg'
import SecondArrow from '../../assets/SecondArrow.svg'

export const CardChart = () => {

    const amountBars = Array.from(Array(12).keys())

    return(
        <S.Container>
            <div>
                <img src={FirstArrow} alt="icone de uma seta esquerda" />
                <strong>starts</strong>
                <img src={SecondArrow} alt="icone de uma seta direita" />
            </div>

            <S.Chart>
                {amountBars.map((item) => (<div><span></span></div>))}
            </S.Chart>

        </S.Container>
    )
}

export default CardChart