import { Box } from "@mui/system";
import FormAsignation from "../components/FormAsignation";
import HomeIcon from '@mui/icons-material/Home';

import { Link } from "react-router-dom";

export default function Picado() {
  return (
    <>
<div>

<Box sx={{margin:1}}>
<h1 className="title">Picado</h1>
<Link to="/">
<HomeIcon></HomeIcon>
</Link>
</Box>
   

      <FormAsignation/>
    </div>
    </>
    
  )
}
