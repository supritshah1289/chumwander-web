import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //connecting to redux store
// import { Card, Button } from "react-bootstrap";
// import CardPlaces from "../common/CardPlaces";
import * as placesActions from "../Redux/actions/placesActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Card, Button } from "react-bootstrap";

class Home extends React.Component {
  componentDidMount() {
    this.props.actions.loadPlaces().catch((error) => {
      alert("Loading courses failed....." + error);
    });
  }

  render() {
    return (
      <>
        <h2>Best Places to visit </h2>
        {this.props.places.map((place) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={place.picture} />
              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text>{place.description}</Card.Text>
                <Button variant="info">
                  <Link to="/place"> Info </Link>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

Home.propTypes = {
  places: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//this function determines what state is passed to our component via props
//request only the data you need and no more. Otherwise when redux store updates, it will re-render the component
function mapStateToProps(state) {
  return {
    places: state.places,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPlaces: bindActionCreators(placesActions.loadPlaces, dispatch),
    },
  };
}

//connect function connects to redux
//then we take results of the connect function and pass it to coursePage
export default connect(mapStateToProps, mapDispatchToProps)(Home);
