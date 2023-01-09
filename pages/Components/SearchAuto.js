import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { makeStyles } from '@mui/styles';
import { search } from "../../server";
import { useRouter } from "next/router";
import loader from "../../public/loader.svg";
import Image from "next/image";
import LinearProgress from '@mui/material/LinearProgress';


const useStyles = makeStyles({
    paper: {
        border: "1px solid #d3d3d3",
        borderRadius: 12,
        boxShadow: "0 8px 13px rgb(70 74 85 / 8%)"
    }
   
});

export default function ComboBox() {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  // const [apartment,setApartment]=useState("");
  // const [type, setType] = useState("");
//   const [searchData, setSearchData] = useState([]);
  const [top100Films, setTop100Films] = useState([]);
//   const top100Films = searchData;
console.log();
  const handleChange = (e) => {
     setSearchVal(e.target.value);
     setIsSearching(true)
    if (searchVal.length > 3) {
      search(searchVal).then((res) => {
        var arr1 = res.data.data.apartments;
        // var arr1 = arr1.map((i) => i + ".    | APARTMENT");
        var arr11=[];
        arr1.map((i) => arr11.push({title: i ,year: "apartment"}));
        var arr2 = res.data.data.villages;
        // arr2 = arr2.map((i) => i + ".    | VILLAGE");
        var arr22=[];
        arr2.map((i) => arr22.push({title: i ,year: "village"}));
        var arr3 = arr11.concat(arr22);
        setTop100Films(arr3);
        console.log(arr3);
        setIsSearching(false)
      });
    }
  };
  console.log(isSearching);
  
  const classes = useStyles();
  return (
    <div className="search-box-sec">
      <div className="Prop-Location-select locaiton-drop">
        <Autocomplete
          id="free-solo-2-demo"
          // options={locations}
          options={locations}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <div style={{ position: "relative" }}>
              <LocationOnIcon className="location-icon-style" />
              <TextField {...params} label="Hyderabad" variant="outlined" />
              {/* <SearchIcon className='search-icon-style' /> */}
            </div>
          )}
        />
      </div>
      <div className="form-divide"></div>
      <Stack className="propq-search search-field">
        {/* <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option)}
          renderInput={(params) => (
            <div style={{ position: "relative" }}>
              <SearchIcon className="search-icon-style" />
              <TextField
                {...params}
                label="Search for locality, or builder"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                value={searchVal}
                onChange={handleChange}
                onKeyDown={keyPress}
              />
              
            </div>
          )}
        /> */}
                        <Autocomplete
                   
                    id="free-solo-2-demo"
                    options={top100Films}  
                    freeSolo
                    loading={true}
                    loadingText={isSearching?<LinearProgress color="inherit"/>:"Type Something..."}
                    // noOptionsText={"Type Something..."}
                    onChange={(option)=>{
                      setTimeout(() => {
                        const val=option.target.innerText
                        console.log(option)
                        console.log(val)
                        console.log(val.substr(val.length-9,9));
                        if(val.substr(val.length-9,9)=='apartment'){
                          router.push(`/dashboard?apartment=${val.substr(0,val.length-9)}&type=apartment`);
                          // router.push(`/dashboard?apartment=${val}&type=apartment`);
                        }
                        else{
                          router.push(`/dashboard?apartment=${val.substr(0,val.length-8)}&type=locality`);
                          // router.push(`/dashboard?apartment=${val}&type=apartment`);
                        }

                      }, 1000);
                      
                    }}               
                    disableClearable
                    // options={top100Films.map((option) => `${option.title}${option.year}`,)}
                    renderInput={(params) => (
                        <div style={{ position: 'relative' ,display:"flex"}}>
                            <SearchIcon className='search-icon-style' />
                            <TextField
                                {...params}
                                label="Search for locality, or builder" variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                                onChange={handleChange}
                                // onKeyDown={keyPress}
                            />
                            {/* {isSearching?<div class="spinner-border spinner-border-sm" role="status" style={{alignSelf:"center",marginRight:20}}>
  <span class="sr-only"></span>
</div>:<></>} */}
                        </div>
                    )}
                    getOptionLabel={(option) => `${option.title}`}
                    // style={{ border: '1px solid #000' }}
                    classes={{ paper: classes.paper}}
                    renderOption={(option) => {
                      
                        return <div className='search-item' >
                           <h6 className='title-style'>{`${option.title}`}<span className='year-style'>{`${option.year}`}</span></h6>
                            {/* <div className='title-style' >{`${option.title}`}</div><h6 className='year-style'>{`${option.year}`}</h6> */}
                        </div>
                          
                    }}

                />

      </Stack>
    </div>
  );
}


// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 'Locality' },
//     { title: 'The Godfather', year: 'Locality' },
//     { title: 'The Godfather: Part II', year: 'Company' },
//     { title: 'The Dark Knight', year: 'Company' },
//     { title: '12 Angry Men', year: 'Locality' },
//     { title: 'The Godfather: Part II', year: 'Company' },
//     { title: 'The Dark Knight', year: 'Company' },
//     { title: '12 Angry Men', year: 'Locality' },

// const locations = [
//   { title: "Hyderabad", year: 1994 },
//   { title: "Delhi", year: 1972 },
//   { title: "Mumbai", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
//   { title: "The Lord of the Rings: The Return of the King", year: 2003 },
//   { title: "The Good, the Bad and the Ugly", year: 1966 },
//   { title: "Fight Club", year: 1999 },
//   { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
//   { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
//   { title: "Forrest Gump", year: 1994 },
//   { title: "Inception", year: 2010 },
//   { title: "The Lord of the Rings: The Two Towers", year: 2002 },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: "Goodfellas", year: 1990 },
// ];


/////////////////////iske baad se








 
//     return (
//         <div className='search-box-sec'>

//             <div className='Prop-Location-select locaiton-drop'>
//                 <Autocomplete
//                     id="free-solo-2-demo"
//                     options={locations}
//                     getOptionLabel={(option) => option.title}
//                     classes={{ paper: classes.paper }}
//                     renderInput={(params) => (
//                         <div style={{ position: 'relative' }}>
//                             <LocationOnIcon className='location-icon-style' />
//                             <TextField {...params} label="Hyderabad" variant="outlined" />
//                             {/* <SearchIcon className='search-icon-style' /> */}
//                         </div>
//                     )}
//                 />
//             </div>
//             <div className='form-divide'></div>
//             <Stack className='propq-search search-field'>
//                 <Autocomplete
//                     // freeSolo
//                     id="free-solo-2-demo"
//                     options={top100Films}                 
//                     disableClearable
//                     // options={top100Films.map((option) => `${option.title}${option.year}`,)}
//                     renderInput={(params) => (
//                         <div style={{ position: 'relative' }}>
//                             <SearchIcon className='search-icon-style' />
//                             <TextField
//                                 {...params}
//                                 label="Search for locality, or builder" variant="outlined"
//                                 InputProps={{
//                                     ...params.InputProps,
//                                     type: 'search',
//                                 }}
//                                 onChange={handleChange}
//                                 onKeyDown={keyPress}
//                             />
//                         </div>
//                     )}
//                     getOptionLabel={(option) => `${option.title}${option.year}`}
//                     // style={{ border: '1px solid #000' }}
//                     classes={{ paper: classes.paper }}
//                     renderOption={(option) => {
//                         return <div className='search-item'>
//                             <h6 className='title-style'>{`${option}`}<span className='year-style'>{`${option.year}`}</span></h6>
//                         </div>


//                     }}

//                 />
//             </Stack>



//         </div>

//     );
// }


// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 'Locality' },
//     { title: 'The Godfather', year: 'Locality' },
//     { title: 'The Godfather: Part II', year: 'Company' },
//     { title: 'The Dark Knight', year: 'Company' },
//     { title: '12 Angry Men', year: 'Locality' },

// ];


const locations = [
    { title: 'Hyderabad', year: 1994 },
    // { title: 'Delhi', year: 1972 },
    // { title: 'Mumbai', year: 1974 },
    // { title: 'Kolkata', year: 1974 },

];


