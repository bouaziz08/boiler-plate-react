/**
 *
 * AddDemande
 *
 */
import React, { useEffect } from 'react';

// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { StyledBox } from 'components/GlobalComponents/StyledBox';
import { StyledSubmitButton } from 'components/GlobalComponents/StyledSubmitButton';
import makeSelectAddDemande, {
  makeSelectmatriculedemandeur,
  makeSelectnomequip,
  makeSelectquantite,
  makeSelecttypededemande,
  makeSelectpoiture,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsSideBarVisible,
} from './selectors';
import Box from '@mui/material/Box';
import {
  changeMatriculeAction,
  changeNomequipementAction,
  changeQuantiteAction,
  changeTypeDeDemandeAction,
  changePointureAction,
  addDataAction,
  demandePageStoreCleanupAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import TextInput from './TextInput';
// import logo from '/app/images/logo-512x512.png';
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import tmaLoginImage from '/app/images/logo-512x512.png';

const mapStateToProps = createStructuredSelector({
  isSideBarVisible: makeSelectIsSideBarVisible,
  addDemande: makeSelectAddDemande(),
  matriculedemandeur: makeSelectmatriculedemandeur(),
  nomequipement: makeSelectnomequip(),
  quantite: makeSelectquantite(),
  typededemande: makeSelecttypededemande(),
  pointure: makeSelectpoiture(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function AddDemande() {
  useInjectReducer({ key: 'addDemande', reducer });
  useInjectSaga({ key: 'addDemande', saga });

  const dispatch = useDispatch();
  const {
    isSideBarVisible,
    matriculedemandeur,
    nomequipement,
    quantite,
    typededemande,
    pointure,
    loading,
    error,
  } = useSelector(mapStateToProps);

  const onChangeMatricule = (evt) =>
    dispatch(changeMatriculeAction(evt.target.value));
  const onChangeNomequipement = (evt) =>
    dispatch(changeNomequipementAction(evt.target.value));
  const onChangeQuantite = (evt) =>
    dispatch(changeQuantiteAction(evt.target.value));
  const onChangeTypeDeDemande = (evt) =>
    dispatch(changeTypeDeDemandeAction(evt.target.value));
  const onChangePointure = (evt) =>
    dispatch(changePointureAction(evt.target.value));
  const onSubmitForm = () => {
    dispatch(
      addDataAction(
        matriculedemandeur,
        nomequipement,
        quantite,
        typededemande,
        pointure,
      ),
    );
  };

  useEffect(
    () => () => {
      dispatch(demandePageStoreCleanupAction());
    },
    [],
  );
  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (
        matriculedemandeur &&
        nomequipement &&
        quantite &&
        typededemande &&
        pointure
      )
        onSubmitForm();
    }
  };

  return (
    <Box
      position="fixed"
      top={64}
      bottom={0}
      left={isSideBarVisible ? 200 : 0}
      right={0}
      sx={{
        overflowY: 'scroll',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflow: 'auto',
      }}
    >
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
              value={matriculedemandeur}
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
              value={typededemande}
              disabled={loading}
              label="TypeDeDemande"
              onChange={onChangeTypeDeDemande}
              onKeyUp={handleKeypress}
            />
            <TextInput
              value={pointure}
              disabled={loading}
              label="Pointure"
              onChange={onChangePointure}
              onKeyUp={handleKeypress}
            />
            <StyledSubmitButton
              sx={{ textTransform: 'none', width: '222px' }}
              variant="contained"
              disabled={
                !(
                  matriculedemandeur &&
                  nomequipement &&
                  quantite &&
                  typededemande &&
                  pointure
                ) || loading
              }
              onClick={onSubmitForm}
            >
              confirmer
            </StyledSubmitButton>
          </StyledBox>
        </StyledBox>
      </StyledBox>
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
              value={matriculedemandeur}
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
              value={typededemande}
              disabled={loading}
              label="TypeDeDemande"
              onChange={onChangeTypeDeDemande}
              onKeyUp={handleKeypress}
            />
            <TextInput
              value={pointure}
              disabled={loading}
              label="Pointure"
              onChange={onChangePointure}
              onKeyUp={handleKeypress}
            />
            <StyledSubmitButton
              sx={{ textTransform: 'none', width: '222px' }}
              variant="contained"
              disabled={
                !(
                  matriculedemandeur &&
                  nomequipement &&
                  quantite &&
                  typededemande &&
                  pointure
                ) || loading
              }
              onClick={onSubmitForm}
            >
              confirmer
            </StyledSubmitButton>
          </StyledBox>
        </StyledBox>
      </StyledBox>
    </Box>
  );
}
AddDemande.propTypes = {};

export default AddDemande;
