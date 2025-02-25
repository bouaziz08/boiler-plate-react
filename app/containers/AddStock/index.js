/**
 *
 * AddStock
 *
 */
import { StyledBox } from 'components/GlobalComponents/StyledBox';
import { StyledSubmitButton } from 'components/GlobalComponents/StyledSubmitButton';
import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectIsSideBarVisible } from 'containers/SideBar/selectors';
import Box from '@mui/material/Box';
import makeSelectAddStock, {
  makeSelectIdEquipement,
  makeSelectquantiteEntrer,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import {
  changeIdEquipmentAction,
  changeQuantiteentrerAction,
  stockPageStoreCleanupAction,
  addStockAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';
// import { Select } from '@mui/material';
import TextInput from './TextInput';
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved
import tmaLoginImage from '/app/images/logo-512x512.png';

const mapStateToProps = createStructuredSelector({
  isSideBarVisible: makeSelectIsSideBarVisible(),
  addStock: makeSelectAddStock(),
  idEquipement: makeSelectIdEquipement(),
  quantiteEntrer: makeSelectquantiteEntrer(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function AddStock() {
  useInjectReducer({ key: 'addStock', reducer });
  useInjectSaga({ key: 'addStock', saga });
  const dispatch = useDispatch();
  const { isSideBarVisible, idEquipement, quantiteEntrer, loading, error } =
    useSelector(mapStateToProps);

  const onChangeIdEquipement = (evt) =>
    dispatch(changeIdEquipmentAction(evt.target.value));
  const onChangequantiteEntrer = (evt) =>
    dispatch(changeQuantiteentrerAction(evt.target.value));
  const onSubmitForm = () => {
    dispatch(addStockAction(idEquipement, quantiteEntrer));
  };

  useEffect(
    () => () => {
      dispatch(stockPageStoreCleanupAction());
    },
    [],
  );
  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (idEquipement && quantiteEntrer) onSubmitForm();
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
              value={idEquipement}
              disabled={loading}
              label="Id Equipment"
              onChange={onChangeIdEquipement}
              onKeyUp={handleKeypress}
            />
            <TextInput
              value={quantiteEntrer}
              disabled={loading}
              label="Quantite"
              onChange={onChangequantiteEntrer}
              onKeyUp={handleKeypress}
            />
            <StyledSubmitButton
              sx={{ textTransform: 'none', width: '222px' }}
              variant="contained"
              disabled={!(idEquipement && quantiteEntrer) || loading}
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
AddStock.propTypes = {};

export default AddStock;
