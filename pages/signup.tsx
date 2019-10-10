import * as React from "react";
import fetch from "isomorphic-unfetch";

interface SignUpPageProps {
  message: any;
}

export default class SignUpPage extends React.Component<SignUpPageProps> {
  static async getInitialProps() {
    let message;

    try {
      const resp = await fetch("http://localhost:8080/login");
      message = await resp.json();
    } catch (e) {
      console.log(e, 123);
    }
    return { message };
  }
  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>sign uзззp</h1>
        <div>{JSON.stringify(message)}</div>
      </div>
    );
  }
}
