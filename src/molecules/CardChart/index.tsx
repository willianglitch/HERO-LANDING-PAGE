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
                {amountBars.map((item) => (
                    <>
                        <div key={String(item)}>
                            <span></span>
                        </div>
                        <small>{item + 1}</small>
                    </>
                ))}
            </S.Chart>

        </S.Container>
    )
}

export default CardChart