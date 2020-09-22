import styled from "styled-components";

export const Nav = styled.div`
position: sticky;
top: 0;
float: left;
width: 100%;
background-color: #303030;
display: flex;
align-items:center;
z-index: 100;
`
export const LogoIcon = styled.div`
width: 45px;
height: auto;
margin: 18px 15px  15px;
object-fit: contain;
&.logo-center{
margin: auto;
}
`
export const SearchBar = styled.div`
display: inherit;
flex: 1;
    input {
        height: 12px;
        padding: 10px;
        border: none;
        width: 100%;
    }
    .searchIcon{
        background-color: red;
        padding: 5px;
        height: 22px;
    }
`
export const HeaderNav = styled.div`
display: flex;
justify-content: space-evenly;
    a{
        text-decoration: none;
        color: #fff;
    }
   
`

export const HeaderOption = styled.div`
display: flex;
flex-direction: column;
    margin: 0 10px;
    span{
        &:first-child{
            font-size: 10px;
        }
        &:nth-child(2){ 
            font-size: 13px;
            font-weight: bold;
        }
    }
`

export const HeaderOptionBasket = styled.div`
display: flex;
align-items: center;        
    .basket-count{
        font-size: 13px;
        font-weight: bold;
        margin: 0 10px;
    }
   
      
`