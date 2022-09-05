import { Grid, Box, Typography, Button, ButtonGroup, Link, colors } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import BarChart from "./BarChart";
import CustomMap from "./CustomMap";
import DoughnutChart from "./DoughnutChart";
import axios from "axios";
import { UserContext } from "../GlobalContext";

function Home() {
  
  const { pos, setPos, selected } = useContext(UserContext);
  const [stats, setStats] = useState([]);
  const [donut, setDonut] = useState([]); 

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/all/")
      .then((r) => {
        setStats(r.data);
        setStats(r.data.order.drill_down.entity);
        setDonut(r.data.species.drill_down.entity);
  
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Typography  sx={{mt:4, color:colors.purple[400]}} textAlign='center' variant='h5'>Bold System Data Summary of Nepal</Typography>
      <Box
        sx={{
          boxShadow: 4,
          height: "500px",
          m: 2,
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent:'center',
          gap:15,
        }}
      >
        <DoughnutChart values={donut} />
        <BarChart values={stats} />
        {/* <DoughnutChart /> */}
      </Box>
      <Grid container sx={{ mt: 4 }} gap={1}>
        <Grid item md={6} sx={{ ml: 2, boxShadow: 2 }}>
          <CustomMap />
        </Grid>
        <Grid item md={5} sx={{ boxShadow: 3, ml: 4, pt: 2 }}>
          <ButtonGroup
            sx={{ display: "flex", justifyContent: "center" }}
            variant="outlined"
            aria-label="text button group"
          >
            <Button onClick={()=>setPos('one')}>Taxonomy</Button>
            <Button onClick={()=>setPos('two')}>Sequence</Button>
            <Button onClick={()=>setPos('three')}>Others</Button>
          </ButtonGroup>

          {selected ? (
            <>
            <Box display={pos==='one'?'flex':'none'} sx={{ pt: 8, flexDirection:'column',justifyContent:'space-between',alignItems:'center' }}>
              <Typography variant='h6' color='secondary'>
                Phylum: {selected.values.taxonomy.phylum.taxon.name}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Class: {selected.values.taxonomy.class.taxon.name}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Order: {selected.values.taxonomy.order.taxon.name}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Family:{" "}
                {selected.values.taxonomy.family
                  ? selected.values.taxonomy.family.taxon.name
                  : "None"}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Subfamily:{" "}
                {selected.values.taxonomy.subfamily
                  ? selected.values.taxonomy.subfamily.taxon.name
                  : "None"}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Genus:{" "}
                {selected.values.taxonomy.genus
                  ? selected.values.taxonomy.genus.taxon.name
                  : "None"}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Species:{" "}
                {selected.values.taxonomy.species
                  ? selected.values.taxonomy.species.taxon.name
                  : "None"}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Subspecies:{" "}
                {selected.values.taxonomy.subspecies
                  ? selected.values.taxonomy.subspecies.taxon.name
                  : "None"}
              </Typography>
              <Link sx={{ fontSize:'20px'}} href={`https://www.boldsystems.org/index.php/Public_RecordView?processid=${selected.code}`}>Read More</Link>
            </Box>
            <Box display={pos==='two'?'flex':'none'} sx={{pt: 8, flexDirection:'column',justifyContent:'space-between',alignItems:'center' }}>
              <Typography sx={{overflowX:'scroll', width:'400px'}} color='secondary'>{selected.values.sequences?selected.values.sequences.sequence[0].nucleotides:"No data"}</Typography>
            </Box>
            <Box display={pos==='three'?'flex':'none'} sx={{ pt: 8, flexDirection:'column',justifyContent:'space-between',alignItems:'center' }}>
              <Typography variant='h6' color='secondary'>Collectors: {selected.values.collection_event.collectors?selected.values.collection_event.collectors:"No data"}</Typography>
              <Typography variant='h6' color='secondary'>Country: {selected.values.collection_event.country?selected.values.collection_event.country:"No data"}</Typography>
              <Typography variant='h6' color='secondary'>Region: {selected.values.collection_event.region?selected.values.collection_event.region:"No data"}</Typography>
              <Typography variant='h6' color='secondary'>Sector: {selected.values.collection_event.sector?selected.values.collection_event.sector:"No data"}</Typography>
              <Typography variant='h6' color='secondary'>Elevation: {selected.values.collection_event.elev?selected.values.collection_event.elev:"0"}m</Typography>
            </Box>
            </>
          ) : (
            <Typography mt={20} ml={25} sx={{color:'lightgray'}}  >Search to display data</Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
