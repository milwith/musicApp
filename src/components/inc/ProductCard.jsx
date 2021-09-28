import React from "react";
import { Card, Button } from "react-bootstrap";
function ProductCard(props) {
  const [str, setVisitState] = React.useState("No");
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>

          <Card.Text>Interesting: {str}</Card.Text>
          <Button
            variant="primary"
            onClick={function () {
              if (str === "No") {
                setVisitState("Yes");
              } else {
                setVisitState("No");
              }
            }}
          >
            Visit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
