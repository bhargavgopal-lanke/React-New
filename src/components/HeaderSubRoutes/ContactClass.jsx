import { Component } from "react";
import UseClass from "./AboutClass";

class ContactComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>This is an about page.</h1>
        <UseClass name={"Bhargav"} location={"Hyderabad"} />
      </>
    );
  }
}

export default ContactComponent;
