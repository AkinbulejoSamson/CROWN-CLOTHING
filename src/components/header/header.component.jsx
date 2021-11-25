import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.syles";

const Header = ({currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser !== null
          ? <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
          : <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);