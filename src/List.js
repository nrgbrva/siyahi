import React, { Component } from "react";
class List extends Component {
  state = {
    inp: "",
    employees: [
      { id: 1, name: "Frodo Baggins", department: "Management", role: "CEO" },
      { id: 2, name: "Samwise Gamgee", department: "Management", role: "CTO" },
      {
        id: 3,
        name: "Gandalf the Gray",
        department: "Recruitment",
        role: "Lead-recruiter"
      },
      {
        id: 4,
        name: "Aragorn",
        department: "Security",
        role: "Security officer"
      },
      {
        id: 5,
        name: "Legolas",
        department: "Management",
        role: "Office manager"
      }
    ]
  };

  searchName = (el) => {
    this.setState({ inp: el.target.value });
  };
  searchDep = (el) => {
    this.setState({ inp: el.target.value });
  };

  render() {
    let { inp } = this.state;
    return (
      <div>
        <input type="text" onChange={this.searchName} placeholder="name" />{" "}
        <br />
        <input
          type="text"
          onChange={this.searchDep}
          placeholder="department"
        />{" "}
        <br />
        {this.state.employees
          .filter(function fnd(el) {
            let x = el.name.toLowerCase().includes(inp.toLowerCase());
            let y = el.department.toLowerCase().includes(inp.toLowerCase());
            return x ? x : y;
          })
          .map(function (el, index) {
            return (
              <p key={index}>
                {el.name} works at {el.department}{" "}
              </p>
            );
          })}
        ;
      </div>
    );
  }
}
export default List;
