import React, { Component } from "react";
import { Input, Button } from "antd";
import "../style/todolist.less";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      current: "all",
      list: [
        {
          text: "Vue",
          status: true,
        },
        {
          text: "React",
          status: false,
        },
        {
          text: "Typescript",
          status: false,
        },
      ],
    };
  }

  add = () => {
    console.log(this.state);
    let item = {
      text: this.state.value,
      status: false,
    };
    let list = this.state.list.slice();
    this.setState({
      value: "",
      list: [...list, item],
    });
  };

  change = (e) => {
    this.setState({
      value: e.target.value,
      list: this.state.list,
    });
  };

  changeStatus = (index) => {
    console.log("index", index);
    let list = this.state.list;
    list[index].status = !list[index].status;

    this.setState({
      list: list,
    });
  };

  filterList = (current) => {
    
    if(current === 'all'){

    }else if(current === 'yes'){

    }else{

    }
  };

  render() {
    return (
      <div className="todo-wrap">
        <h1>TodoList</h1>
        <div className="input-item">
          <Input
            onChange={this.change}
            placeholder="请输入内容"
            onPressEnter={this.add}
          />
        </div>
        <ul>
          {this.state.list.map((item, index) => (
            <div className="list-item" key={index}>
              <li style={{ backgroundColor: item.status ? "red" : "" }}>
                {item.text}
              </li>
              <Button onClick={() => this.changeStatus(index)} type="primary">
                {item.status ? "取消" : "完成"}
              </Button>
            </div>
          ))}
        </ul>
        <div className="footer">
          <Button
            onClick={() => this.filterList("all")}
            type={this.state.current === "all" ? "primary" : ""}
          >
            全部
          </Button>
          <Button
            onClick={() => this.filterList("yes")}
            type={this.state.current === "yes" ? "primary" : ""}
          >
            已完成
          </Button>
          <Button
            onClick={() => this.filterList("no")}
            type={this.state.current === "no" ? "primary" : ""}
          >
            未完成
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoList;
