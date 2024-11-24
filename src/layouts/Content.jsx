import { Button, Card, Col, Row } from "react-bootstrap";
import StarRating from "../ui/RatingGenerator";
import { formatCurrency } from "../utils";
import { CartContext } from "../store";
import { useContext } from "react";
import { CART_ACTIONS } from "../store/actions";

const Item = ({ item }) => {
  const [state, dispatch] = useContext(CartContext);

  let getSrc = (item) => {
    return item.thumbnail ? item.thumbnail : item.image ? item.image[0] : "";
  };

  return (
    <Card key={item.id}>
      <Card.Img
        variant="top"
        src={getSrc(item)}
        alt={"product: " + item.title}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Body>
          <div>{formatCurrency(item.price)}</div>
          <StarRating rating={item.rating} />
        </Card.Body>
        <Button
          onClick={() =>
            dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: item.id })
          }
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const Content = ({ title, data, loading, error }) => {
  return (
    <div>
      <h2 className="text-capitalize">{title}:</h2>

      {loading && <div>Getting data..</div>}

      {error && <div>{error.message || `Failed to load ${title}..`}</div>}
      <Row>
        {data &&
          data[title].map((item) => (
            <Col key={item.id} xl={3} lg={4} md={6} sm={12} className="mb-4">
              <Item item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Content;
