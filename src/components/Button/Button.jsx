import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Styled';

export const Button = () => {
  return (
    <ButtonStyled type="button" onClick>
      Load more
    </ButtonStyled>
  );
};
