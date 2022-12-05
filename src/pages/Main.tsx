
import ButtonContact from '../stoms/ButtonContact'
import Frontend from '../templates/Frontend'
import HeroHeaderImg from '../assets/HeroHeaderImg.svg'
import * as S from './styles'
import CardActivity from '../molecules/CardActivity'



function Main() {

  return (
    <Frontend>
      <S.Container>
          <div>
            <h1>Design driven development of your web product</h1>
            <h6>We are a full service digital agency that builds immesive user experience.</h6>
            <ButtonContact />
          </div>
          <div className="coluna02">
            <S.ColumImage>
              <CardActivity />
              <img src={HeroHeaderImg} alt="Uma mulher fazendo uma pesquisa em seu dispositivo eletronico" />
            </S.ColumImage>
          </div>

          
      </S.Container>
    </Frontend>  
  )
}

export default Main
