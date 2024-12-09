import { Component } from "react";
import ContactComponent from "./ContactClass";

class UseClass extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
    };
  }

  async componentDidMount() {
    const fetchGitApiData = await fetch(
      "https://api.github.com/users/akshayMarch7"
    );
    const json = await fetchGitApiData.json();

    this.setState({ apiData: json });
  }

  render() {
    const { apiData } = this.state;
    console.log("key :", Object.entries(apiData));
    return (
      <>
        <h1 style={{marginBottom: "25px"}}>This is an about page.</h1>

        {Object.entries(apiData).map((data, index) => {
          return (
            <div>
              <h1 key={index} style={{marginBottom: "15px"}}>{data[0]}:</h1>
              <p style={{marginBottom: "25px"}}>{data[1]}</p>
            </div>
          );
        })}

        {/* <h1>{apiData.bio}</h1>
        <h1>{apiData.location}</h1> */}
        {/* <ContactComponent name={"Bhargav"} location={"Hyderabad"} /> */}
      </>
    );
  }
}

export default UseClass;
