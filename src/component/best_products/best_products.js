import Card from "../card/card"

const BestProducts = ()=>{
    return (
        <>
        <div id="products" style={{"display":"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",padding:'5px'}}>
          <Card ></Card>
          <Card></Card>
          <Card></Card>
        </div>
        </>
    )
}

export default BestProducts