import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="body-sec">Contact Page</h1>
      <form>
        <input type="text" className="border boder-black p-2 m-2" name="name" />
        <input
          type="text"
          className="border boder-black p-2 m-2"
          name="message"
        />
        <button
          type="button"
          data-testid="button"
          className="border boder-black p-2 m-2 bg-gray-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
