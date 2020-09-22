import styled from "styled-components";

export const ProductWrapper = styled.div`
   display: flex;
   flex-direction: column;
   max-height: 400px;
   z-index: 1;
   align-item: center;
   justify-content: flex-end;
   width: 100%;
   padding: 20px;
   margin: 10px;
   background-color: #fff;
`
export const ProductInformation = styled.div`
  height: 100px;
  margin-bottom: 15px;
`
export const ProductPrice = styled.p`
    margin-top: 5px;
    
`
export const AddToBasketBtn = styled.div`
button {
background-color: #bebebe;
margin-top: 15px;
width: 150px;
margin: auto;
display: block;
}
`
export const ProductRating = styled.div`
    display: flex;
 
    span{
       height: 18px;
       width: 18px;
    }
`
export const ProductImage = styled.div`
img {
width: 100%;
max-height: 200px;
object-fit: contain;
margin-bottom: 15px;
}
`