import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    paper: {
        border: "1px solid #d3d3d3",
        borderRadius: 12,
        boxShadow: "0 8px 13px rgb(70 74 85 / 8%)"
    }
});

export default function AddCompetitor() {
    const classes = useStyles();
    return (
        <div className='AddCometitor search-box-sec'>

            {/* <div className='Prop-Location-select locaiton-drop'>
                <Autocomplete
                    id="free-solo-2-demo"
                    options={locations}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <div style={{ position: 'relative' }}>
                            <LocationOnIcon className='location-icon-style' />
                            <TextField {...params} label="Hyderabad" variant="outlined" />                            
                        </div>
                    )}
                />
            </div>
            <div className='form-divide'></div> */}
            <Stack className='propq-search search-field'>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={Companies.map((option) => option.title)}
                    classes={{ paper: classes.paper }}
                    renderInput={(params) => (
                        <div style={{ position: 'relative' }}>
                            <AddIcon className='search-icon-style' />

                            <TextField
                                {...params}
                                label="Add a Company" variant="outlined"
                                CompInputProps={{
                                    ...params.CompInputProps,
                                    type: 'search',
                                }}
                            />
                        </div>
                    )}
                />
            </Stack>



        </div>

    );
}


const Companies = [
    { title: 'Reliance Corp.' },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },    
];


const locations = [
    { title: 'Hyderabad', year: 1994 },
    { title: 'Delhi', year: 1972 },
    { title: 'Mumbai', year: 1974 },
];