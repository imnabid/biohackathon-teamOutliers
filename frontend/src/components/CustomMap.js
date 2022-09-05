import { useContext, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { UserContext } from "../GlobalContext";
import { Button } from "@mui/material";

function CustomMap() {
  const { mapData, setSelected } = useContext(UserContext);
  const [test, setTest] = useState(0);
  const [hue, setHue] = useState(0);

  const handleMarker = (code) => {
    setHue(hue + 20);
    let elem = mapData.find((d)=>d.code===code)
    setSelected(elem);
  };
 
  const handleClick = () => {
    setTest(1);
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={handleClick}
        sx={{ m: 2 }}
      >
        Reload
      </Button>
      <Button
        size="small"
        variant="contained"
        onClick={()=>setTest(0)}
        sx={{ m: 2 }}
      >
        Reset
      </Button>
      <Map height={450} defaultCenter={[27.957, 85]} defaultZoom={7}>
        {test &&
          mapData.map((data) => (
            <Marker
              key={data.code}
              width={30}
              anchor={[
                parseFloat(data.values.collection_event.coordinates.lat),
                parseFloat(data.values.collection_event.coordinates.lon),
              ]}
              onClick={() => handleMarker(data.code)}
            />
          ))}
      </Map>
    </>
  );
}

export default CustomMap;
