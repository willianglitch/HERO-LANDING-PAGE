
import Frontend from '../templates/Frontend'

import * as S from './styles'
import ProductInfo from '../organisms/ProductsInfo'
import ProductStactus from '../organisms/ProductStactus'



function Main() {

  return (
    <Frontend>
      <S.Container>
        <ProductInfo />
        <ProductStactus /> 
      </S.Container>
    </Frontend>  
  )
}

export default Main
