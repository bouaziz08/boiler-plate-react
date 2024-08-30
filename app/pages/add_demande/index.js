import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { StyledBox } from 'components/GlobalComponents/StyledBox';
import { StyledSubmitButton } from 'components/GlobalComponents/StyledSubmitButton';
import makeSelectLoginPage, {
  makeSelectToken,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectLoading,
  makeSelectError,
  makeSelectRole,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import TextInput from './TextInput';
// import logo from '/app/images/logo-512x512.png';
// eslint-disable-next-line import/no-unresolved
import tmaLoginImage from '/app/images/APP_login_image-634×360.png';

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  token: makeSelectToken(),
  role: makeSelectRole(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function LoginPage() {
  useInjectReducer({ key: 'add_demande', reducer });
  useInjectSaga({ key: 'add_demande', saga });
  const history = useHistory();
  const { matricule, nomequipement, quantite, typeDeDemande, loading, error } = useSelector(mapStateToProps);

  const onChangeMatricule = (evt) => dispatch(changeMatriculeAction(evt.target.value));
  const onChangeNomequipement = (evt) => dispatch(changeNomequipementAction(evt.target.value));
  const onChangeQuantite = (evt) => dispatch(changeQuantiteAction(evt.target.value));
  const onChangeTypeDeDemande = (evt) => dispatch(changeTypeDeDemandeAction(evt.target.value));

  const onSubmitForm = () => {
    const formData = { matricule, nomequipement, quantite, typeDeDemande };
    dispatch(submitFormAction(formData));
  };

 
  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (username && password) onSubmitForm();
    }
  };
  return (
    <StyledBox
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    backgroundColor="#f2f2f2"
  >
    <StyledBox
      sx={{
        background:
          'radial-gradient(circle at 50% -50%,#ffffff 10%,#ffffff 60%,#ffffff00 65%),radial-gradient(circle at 50% 65%,#ffffff 1%,#ffffff 20%,#f6f6f6 40%,#f2f2f2 45%)',
        padding: '20px',
        paddingX: '40px',
        borderRadius: '25px',
      }}
      error={error !== true && error}
    >
      <StyledBox
        component="img"
        sx={{
          alignSelf: 'center',
          height: 180,
          width: 317,
          margin: '10px',
          marginBottom: '24px',
        }}
        alt="Dicastal Logo"
        src={tmaLoginImage}
      />
      <StyledBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        loading={loading}
      >
        <TextInput
          value={matricule}
          disabled={loading}
          label="Matricule"
          onChange={onChangeMatricule}
          onKeyUp={handleKeypress}
        />
        <TextInput
          value={nomequipement}
          disabled={loading}
          label="Nomequipement"
          onChange={onChangeNomequipement}
          onKeyUp={handleKeypress}
        />
        <TextInput
          value={quantite}
          disabled={loading}
          label="Quantite"
          onChange={onChangeQuantite}
          onKeyUp={handleKeypress}
        />
        <TextInput
          value={typeDeDemande}
          disabled={loading}
          label="TypeDeDemande"
          onChange={onChangeTypeDeDemande}
          onKeyUp={handleKeypress}
        />
        <StyledSubmitButton
          sx={{ textTransform: 'none', width: '222px' }}
          variant="contained"
          disabled={!(matricule && nomequipement && quantite && typeDeDemande) || loading}
          onClick={onSubmitForm}
        >
           confirmer
          </StyledSubmitButton>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
