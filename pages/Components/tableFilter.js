import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
);

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
);

const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;

function CustomSelect(props) {
    const components = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
    };

    return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components: PropTypes.shape({
        Listbox: PropTypes.elementType,
        Popper: PropTypes.func,
        Root: PropTypes.elementType,
    }),
};

function renderValue(option) {
    if (option == null) {
        return <span>Select Transaction Type</span>;
    }

    return (
        <span>
            {option.label} ({option.value})
        </span>
    );
}



export default function TableFilter() {

    const [value, setValue] = React.useState(null);

    return (
        <div className='propq-card-box'>
            <div className='container filter-block-sec'>
                <div className='section-title d-flow-root m-b-25'>
                    <h5 className='float-l'><b>Filter</b></h5>
                    <p className='float-r'>Clear Filter</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='Prop-select-sec'>
                            <label className='label-sec'>Transaction Type</label>
                            <CustomSelect renderValue={renderValue} className="select-input-prop w100">
                                <StyledOption value={10}>Ten</StyledOption>
                                <StyledOption value={20}>Twenty</StyledOption>
                                <StyledOption value={30}>Thirty</StyledOption>
                            </CustomSelect>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='Prop-select-sec'>
                            <label className='label-sec'>Registration Date</label>
                            <div className='row'>
                                <div className='col-md-6 col-xs-6 prop-date-pic css-fix-border'>
                                    <LocalizationProvider className="w100 " dateAdapter={AdapterDateFns} >
                                        <DatePicker
                                            label="From"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} helperText={params?.inputProps?.placeholder} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className='col-md-6 col-xs-6 prop-date-pic css-fix-border m-t-15'>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="To"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} helperText={params?.inputProps?.placeholder} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='Prop-select-sec'>
                            <label className='label-sec'>Area (SFT)</label>
                            <CustomSelect renderValue={renderValue} className="select-input-prop w100">
                                <StyledOption value={10}>Ten</StyledOption>
                                <StyledOption value={20}>Twenty</StyledOption>
                                <StyledOption value={30}>Thirty</StyledOption>
                            </CustomSelect>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='Prop-select-sec'>
                            <label className='label-sec'>Floor</label>
                            <CustomSelect renderValue={renderValue} className="select-input-prop w100">
                                <StyledOption value={10}>Ten</StyledOption>
                                <StyledOption value={20}>Twenty</StyledOption>
                                <StyledOption value={30}>Thirty</StyledOption>
                            </CustomSelect>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='Prop-select-sec'>
                            <label className='label-sec'>Amount(INR)</label>
                            <CustomSelect renderValue={renderValue} className="select-input-prop w100">
                                <StyledOption value={10}>Ten</StyledOption>
                                <StyledOption value={20}>Twenty</StyledOption>
                                <StyledOption value={30}>Thirty</StyledOption>
                            </CustomSelect>
                        </div>
                    </div>
                </div>

                <div className='filter-footer'>
                    <div class="agreement-check form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Agreement
                        </label>
                    </div>
                    <div className='apply-btn-sec'>
                        <button class="Signin-btn">Apply</button>
                    </div>
                </div>

            </div>


        </div>

    );
}

