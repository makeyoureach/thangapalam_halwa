import { useEffect } from "react";
import Card from "../card/card";

const Featured = ()=>{

    return(
        <>
      <div style={{"display":"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
        </>
    )
}
export default Featured;