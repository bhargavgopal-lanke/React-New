import { Component } from "react";

class ContactComponent extends Component {
  constructor(props) {
    super(props);

    console.log("child constructor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log("child component Did Mount");
  }

  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{location}</h1>

        <div>
          <h1>Count = {count}</h1>
          <h1>Count 2 = {count2}</h1>
        </div>
        <button
          type="button"
          onClick={() =>
            // Never update state variable directlty
            this.setState({
              count: count + 1,
            })
          }
        >
          onclick One
        </button>
        <button
          type="button"
          onClick={() =>
            this.setState({
              count2: count2 + 1,
            })
          }
        >
          onclick Two
        </button>
      </div>
    );
  }
}

export default ContactComponent;
