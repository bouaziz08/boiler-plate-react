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
  makeSelectQuantiteSortie,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import {
  changeIdEquipmentAction,
  changeQuantiteSortieAction,
  stockPageStoreCleanupAction,
  updateStockAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';
// import { Select } from '@mui/material';
import TextInput from './TextInput';
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved
import tmaLoginImage from '/app/images/APP_login_image-634×360.png';

const mapStateToProps = createStructuredSelector({
  isSideBarVisible: makeSelectIsSideBarVisible(),
  addStock: makeSelectAddStock(),
  IdEquipement: makeSelectIdEquipement(),
  QuantiteEntrer: makeSelectQuantiteSortie(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function UpdateStock() {
  useInjectReducer({ key: 'UpdateStock', reducer });
  useInjectSaga({ key: 'UpdateStock', saga });
  const dispatch = useDispatch();
  const { isSideBarVisible, IdEquipement, QuantiteSortie, loading, error } =
    useSelector(mapStateToProps);

  const onChangeIdEquipement = (evt) =>
    dispatch(changeIdEquipmentAction(evt.target.value));
  const onChangequantiteSortie = (evt) =>
    dispatch(changeQuantiteSortieAction(evt.target.value));
  const onSubmitForm = () => {
    dispatch(updateStockAction(IdEquipement, QuantiteSortie));
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
      if (IdEquipement && QuantiteSortie) onSubmitForm();
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
              value={IdEquipement}
              disabled={loading}
              label="Id Equipment"
              onChange={onChangeIdEquipement}
              onKeyUp={handleKeypress}
            />
            <TextInput
              value={QuantiteSortie}
              disabled={loading}
              label="Quantite"
              onChange={onChangequantiteSortie}
              onKeyUp={handleKeypress}
            />
            <StyledSubmitButton
              sx={{ textTransform: 'none', width: '222px' }}
              variant="contained"
              disabled={!(IdEquipement && QuantiteSortie) || loading}
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
UpdateStock.propTypes = {};

export default UpdateStock;
