import { Button, Card, Col, Row } from "react-bootstrap";
import StarRating from "../ui/RatingGenerator";
import { formatCurrency } from "../utils";

const Item = ({ item }) => {
  let getSrc = (item) => {
    return item.thumbnail ? item.thumbnail : item.image ? item.image[0] : "";
  };

  const handleAddToCart = () => {};

  return (
    <Card key={item.id}>
      <Card.Img
        variant="top"
        src={getSrc(item)}
        alt={"product: " + item.title}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <div>{formatCurrency(item.price)}</div>
          <StarRating rating={item.rating} />
        </Card.Text>
        <Button onClick={() => handleAddToCart()}>Add to Cart</Button>
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
          data[title].map((item, index) => (
            <Col xl={3} lg={4} md={6} sm={12} className="mb-4">
              <Item item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Content;
