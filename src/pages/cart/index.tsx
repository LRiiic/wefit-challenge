import React, {useState} from 'react';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/index.types';
import styled from 'styled-components';
import removeIcon from '../../components/UI/SVG/removeIcon.svg';
import minusButton from '../../components/UI/SVG/minusButton.svg';
import plusButton from '../../components/UI/SVG/plusButton.svg';
import { useNavigate } from 'react-router-dom';
import MessagePage from '../../components/MessagePage/MessagePage';

const CartWrapper = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap:24px;
  color: #2F2E41;
`

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    width: 33%;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: #999999;
    text-transform: uppercase;
  }
  
`

const CartFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .total {
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }

    p {
      margin: 0;
    }

    p:first-child {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      text-align: center;
      text-transform: uppercase;
      color: #999999;
    }

    p:last-child {
      font-size: 24px;
      font-weight: 700;
      line-height: 32.68px;
      text-align: center;
      color: #2F2E41;
    }
  }
`

const CheckoutButton = styled.button`
  cursor: pointer;
  width: 173px;
  height: 34px;
  padding: 8px;
  gap: 12px;
  border-radius: 4px;
  background-color: #009EDD;
  color: #FFFFFF;
  border: none;
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  text-align: center;
  text-transform: uppercase;
  transition: all 300ms ease-out;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    background-color: #0073A1;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #2F2E41;
  padding-bottom: 24px;
  border-bottom: 1px solid #999999;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  .column {
    width: 33%;
    box-sizing: border-box;
    @media (min-width: 769px) {
      &:first-of-type {
        width: calc(33% - 91px);
      }
    }

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .titleWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 24px;
    @media (max-width: 768px) {
      flex-direction: column;
      width: calc(100% - 64px);
      margin-left: 64px;
    }
    gap: 16px;
  }
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    p { 
      margin: 0;
    }

    span {
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }
      gap: 8px;
    }

    .title {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      text-align: left;
    }

    .price {
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 21.79px;
      text-align: left;
      @media (max-width: 768px) {
        padding-right: 30px;
      }
    }
  }

  img {
    width: 91px;
    position: relative;
    @media (max-width: 768px) {
      width: 64px;
      position: absolute;
    }
    object-fit: contain;
  }

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;

    @media (max-width: 768px) {
      margin-left: 88px;
      margin-top: 20px;
    }
    
    input {
      width: 62px;
      height: 26px;
      padding: 16px;
      gap: 0px;
      border-radius: 4px;
      border: 1px solid #D9D9D9;
      box-sizing: border-box;
      text-align: center;
    }
    
    button {
      width: 18px;
      height: 18px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      padding: 0;

      i {
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        width: 18px;
        height: 18px;
      }
    }

    button:first-child {
      i {
        background-image: url(${minusButton});
      }
    }

    button:last-child {
      i {
        background-image: url(${plusButton});
      }
    }
  }

  .subtotal {
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0;
    }
    @media (max-width: 768px) {
      width: calc(50% - 88px);
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      margin-top: 20px;
      &:before {
        content: 'Subtotal';
        font-size: 12px;
        font-weight: 700;
        line-height: 16.34px;
        text-align: left;
        text-transform: uppercase;
        color: #999999;
      }
    }
  }

  .remove {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    @media (max-width: 768px) {
      position: absolute;
      top: 0px;
      right: 0px;
    }
    i {
      cursor: pointer;
      display: block;
      background-image: url(${removeIcon});
      background-repeat: no-repeat;
      background-position: center;
      width: 24px;
      height: 24px;
    }
  }
`

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { getCart, setCartItemsCount, cartItemsCount, removeFromCart, getTotal, changeQuantity } = useCart(() => {
    setCartItemsCount(getCart().length);
    setCurrentCart(getCart());
  });

  const [currentCart, setCurrentCart] = useState<Product[]>(getCart());

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  }

  return (
    <>
    {!currentCart.length ? <MessagePage message="Parece que não há nada por aqui :(" type="error" /> :
    <CartWrapper>
      <CartHeader>
        <p>Produto</p>
        <p>Qtd</p>
        <p>Subtotal</p>
      </CartHeader>
      { currentCart && currentCart.map((product: Product) => (
        <Item key={product.id}>
          <img src={product.image} alt={product.title} />
          

          <div className="column titleWrapper">
            <div className="info">
              <span>
                <p className="title">{product.title}</p>
                <p className="price">R$ {formatPrice(product.price)}</p>
              </span>
            </div>
          </div>
          <div className="column quantity">
            <button onClick={() => changeQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}><i></i></button>
            <input type="text" value={product.quantity} onChange={() => {}} />
            <button onClick={() => changeQuantity(product.id, product.quantity + 1)}><i></i></button>
          </div>

          <div className="column subtotal">
            <p>R$ {formatPrice(product.price * product.quantity)}</p>
            <button className="remove" onClick={() => removeFromCart(product.id)}>
              <i></i>
            </button>
          </div>


        </Item>
      ))}

      <CartFooter>
        <CheckoutButton onClick={() => navigate("/checkout")}>Finalizar Pedido</CheckoutButton>
        <div className="total">
          <p>Total</p>
          <p>R$ {formatPrice(getTotal())}</p>
        </div>
      </CartFooter>
    </CartWrapper>
    }

    </>
  );
};

export default Cart;