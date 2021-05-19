import Button from "./Button";
function Card(props) {
      return (
          <div className="card">
              <div className="card-image">
                  <img src={props.formproduct.image} alt="images"/>
              </div>
              <div className="card-info">
                  <div className="card-name">{props.formproduct.name} </div>
                  <div className="card-rating">{props.formproduct.rating} </div>
                  <div className="card-price">{props.formproduct.price} </div>
              </div>
              <Button formpro={props.formproduct} setBought={props.setBouth} ide={props.ide} bought={props.bought}/>
          </div>
      )

  } 
  export default Card;