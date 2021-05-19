import Card from "./card";


function Content(props) {

const pors = props.base.map((product) => {
    return <Card formproduct={product} setBouth={props.setBouth} ide={product.id} bought={product.bought} />
})
    return(
        <div className="content">
            {pors}
        </div>
        
    )
}
export default Content;
