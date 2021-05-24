import { Component } from "react";
import Loader from "react-loader-spinner";
import { primary } from "../../constants/colors";
import { Container } from "./styles/loading";
export default class Loading extends Component {
  //other logic
  render() {
    return (
      <Container>
        <Loader
          type="Puff"
          color={primary}
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Container>
    );
  }
}
