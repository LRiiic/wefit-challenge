import React from 'react';
import { useNavigate } from 'react-router-dom';
import MessagePage from '../../components/MessagePage/MessagePage';

const Checkout: React.FC = () => {
  return (
    <MessagePage message="Compra realizada com sucesso!" type="success"/>
  );
};

export default Checkout;