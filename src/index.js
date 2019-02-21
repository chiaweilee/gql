import React from "react";
import ReactDOM from "react-dom";
import { Input, Layout } from "antd";
import { graphql } from "graphql";
import "antd/dist/antd.css";
import schema from "./schema";
import fields from "./fields";

const { Footer, Sider, Content } = Layout;
const { TextArea } = Input;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: ""
    };
    this.input = this.input.bind(this);
  }

  input(e) {
    this.setState({
      query: e.target.value
    });
    this.gql();
  }

  gql() {
    graphql(schema, this.state.query).then(result => {
      this.setState({ result });
    });
  }

  render() {
    return (
      <Layout>
        <Sider width={"50%"} theme={"light"}>
          <TextArea
            value={this.state.query}
            onChange={this.input}
            autosize={{
              minRows: 35
            }}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "20px", height: "50%" }}>
            {JSON.stringify(fields)}
          </Content>
          <Footer style={{ height: "50%" }}>
            {JSON.stringify(this.state.result)}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
