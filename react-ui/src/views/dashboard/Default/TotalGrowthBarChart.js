import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { Grid, MenuItem, TextField, Typography, useTheme } from '@material-ui/core';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from './../../../ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from './../../../ui-component/cards/MainCard';
import { gridSpacing } from './../../../store/constant';

// chart data
import chartData from './chart-data/total-growth-bar-chart';
import styled, { createGlobalStyle, css } from 'styled-components';

// const status = [
//     {
//         value: 'today',
//         label: 'Today'
//     },
//     {
//         value: 'month',
//         label: 'This Month'
//     },
//     {
//         value: 'year',
//         label: 'This Year'
//     }
// ];

// function handleInputChange = (e) => {
//     this.setState({
//       textData: e.target.value,
//     });
//   };

//-----------------------|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||-----------------------//

// const TotalGrowthBarChart = ({ isLoading }) => {
//     const [value, setValue] = React.useState('today');
//     const theme = useTheme();

//     const primary = theme.palette.text.primary;
//     const grey200 = theme.palette.grey[200];

//     const primary200 = theme.palette.primary[200];
//     const primaryDark = theme.palette.primary.dark;
//     const secondaryMain = theme.palette.secondary.main;
//     const secondaryLight = theme.palette.secondary.light;
//     const grey500 = theme.palette.grey[500];

// }

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #0, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: inline;
  justify-content: left;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledFormWrapperRight = styled.div`
  display: inline;
  justify-content: right;
  align-items: center;
  height: 1000vh;
  padding: 0 20px;
`;


const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledRightBar = styled.fieldset`
  left: -100%;
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
  gender: ''
};

function TotalGrowthBarChart() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`Re-upload new audio to perform new analysis`)
        return
      }
    }
    setError('');

    console.log("Succeeded!!!")
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

    // React.useEffect(() => {
    //     const newChartData = {
    //         ...chartData.options,
    //         colors: [primary200, primaryDark, secondaryMain, secondaryLight],
    //         xaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
    //                 }
    //             }
    //         },
    //         yaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [primary]
    //                 }
    //             }
    //         },
    //         grid: {
    //             borderColor: grey200
    //         },
    //         tooltip: {
    //             theme: 'light'
    //         },
    //         legend: {
    //             labels: {
    //                 colors: grey500
    //             }
    //         }
    //     };

    //     // do not load chart when loading
    //     if (!isLoading) {
    //         ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    //     }
    // }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, grey200, isLoading, grey500]);

    return (
        <>
        <StyledFormWrapper>
            <StyledButton type="submit">Upload Audio</StyledButton>
        </StyledFormWrapper>
        <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
            <h2>Analysed Text</h2>
            <StyledTextArea
                name="message"
                value={state.message}
                onChange={handleInput}
            />
            {error && (
                <StyledError>
                <p>{error}</p>
                </StyledError>
            )}
            <StyledButton type="submit">Analyse</StyledButton>
            </StyledForm>
        </StyledFormWrapper>
    </>
    );
};

{/* TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
}; */}

export default TotalGrowthBarChart;

//  return (
//          <React.Fragment>
//              <form>
//                  <input
//                     type="text"
//                     label="Text Data"
//                     id="text-data"
//                     name="text-data"
                    
//                 />
//             </form>
//             {isLoading ? (
//                 <SkeletonTotalGrowthBarChart />
//             ) : (
//                 <MainCard>
//                     <form>
//                         <input
//                         type="text"
//                         label="Text Data"
//                         id="text-data"
//                         name="text-data"
//                         />
//                     </form>
//                     <Grid container spacing={gridSpacing}>
//                         <Grid item xs={12}>
//                             <Grid container alignItems="center" justifyContent="space-between">
//                                 <Grid item>
//                                     <Grid container direction="column" spacing={1}>
//                                         <Grid item>
//                                             <Typography variant="subtitle2">Total Growth</Typography>
//                                         </Grid>
//                                         <Grid item>
//                                             <Typography variant="h3">$69
//                                             </Typography>
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                                 <Grid item>
//                                     <TextField
//                                         id="standard-select-currency"
//                                         select
//                                         value={value}
//                                         onChange={(e) => setValue(e.target.value)}
//                                     >
//                                         {status.map((option) => (
//                                             <MenuItem key={option.value} value={option.value}>
//                                                 {option.label}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Chart {...chartData} />
//                         </Grid>
//                     </Grid>
//                 </MainCard>
//             )}
//         </React.Fragment>
//     ); 
