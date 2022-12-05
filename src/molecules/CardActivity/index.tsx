import * as S from "./style";
import Seta from '../../assets/SetaCardActivity.svg'

const CardActivity = () => {
    return(
        <S.Container>
            <small>activity</small>
            <div>
                <span>18</span> <img src={Seta} alt="imagem de uma seta" />
            </div>
            <i className="circle1"></i>
            <i className="circle2"></i>
            <i className="circle3"></i>
        </S.Container>
    )  
}

export default CardActivity