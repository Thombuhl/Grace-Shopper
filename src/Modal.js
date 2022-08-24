import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { addToCart } from './store';
import styled from 'styled-components';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 3px;
  border-radius: 50%;
  background-color: gray;
  transition: all 0.7s ease;
  &:hover {
    background-color: teal;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const ModalBox = ({ addToCart, product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Icon
        onClick={() => {
          handleOpen();
          addToCart(product);
        }}
      >
        <ShoppingBasketIcon style={{ color: '#53bf9d' }} />
      </Icon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ backgroundColor: '#343a40' }} sx={style}>
          <Typography
            style={{ color: 'white' }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            ✅ Item added to cart!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const mapState = ({ products, cart, auth }) => {
  return {
    products,
    cart,
    auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapState, mapDispatch)(ModalBox);
