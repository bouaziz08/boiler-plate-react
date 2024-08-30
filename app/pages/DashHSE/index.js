// Dashboard.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { StyledBox } from 'components/GlobalComponents/StyledBox';
import { fetchDataAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectDashboard, {
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
  data: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function Dashboard() {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(mapStateToProps);

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          width: '80%',
          maxWidth: '1200px',
        }}
      >
        <StyledBox
          component="h1"
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Dashboard
        </StyledBox>
        <StyledBox
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Code d'article SAP</th>
                <th>EPI</th>
                <th>Reference</th>
                <th>Norme</th>
                <th>Fournisseur</th>
                <th>Frequence</th>
                <th>Consommation theorique</th>
                <th>Stock securite</th>
                <th>Pointure</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.column1}</td>
                  <td>{item.column2}</td>
                  <td>{item.column3}</td>
                  <td>{item.column4}</td>
                  <td>{item.column5}</td>
                  <td>{item.column6}</td>
                  <td>{item.column7}</td>
                  <td>{item.column8}</td>
                  <td>{item.column9}</td>
                  <td>{item.column10}</td>
                  <td>{item.column11}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </StyledBox>
      </StyledBox>
    </StyledBox>
  );
}

export default Dashboard;
