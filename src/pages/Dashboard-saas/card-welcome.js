import React from "react"
import { Row, Col, Card } from "reactstrap"

//Import Images
import profileImg from "../../assets/images/profile-img.png"

function CardWelcome(props) {
  return (
    <React.Fragment>
    <Col xl="3" style={{Index: "10", height: "137px" , borderRadius: "12px"}}>
      <Card  style={{position: "relative", height: "137px"}}>
        <div>
          <Row>
            <Col xs="7" style={{position: "absolute", top: "0", left: "0", zIndex: "1", borderRadius: "12px"}}>
              <div className="text-primary p-2">
                <h5 className="text-primary">View Plot</h5>
              </div>
            </Col>
            <Col xs="14" className="align-self-end" style={{Index: "10", height: "137px" , borderRadius: "12px"}}>
              <img  src="https://images.pexels.com/photos/3892172/pexels-photo-3892172.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  </React.Fragment>
  );
}

export default CardWelcome;