import * as S from "./style";
import Seta from '../../assets/SetaCardActivity.svg'

const CardActivity = () => {
    return(
        <S.Container>
            <small>activity</small>
            <div>
                <span>18</span> <img src={Seta} alt="imagem de uma seta" />
            </div>

            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
        </S.Container>
    )  
}

export default CardActivity