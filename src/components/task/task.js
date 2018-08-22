import React from "react";

class Task extends React.Component {
  render() {
    let ww = statementsData.map(val => val);
    ww = ww.filter(val => {
      return val.group === "Execute";
    });

    console.log(ww);
    const { name, description, group } = this.props;
    return (
      <div>
        {statementsData.map(elem => (
          <article
            style={{
              border: "2px solid blue ",
              padding: "30px",
              margin: "3px"
            }}
            key={elem.id}
          >
            <div>{elem.name}</div>
            <div>{elem.description}</div>
            <div>{elem.group}</div>
          </article>
        ))}

        {ww.map(elem => (
          <article
            style={{
              border: "2px solid blue ",
              padding: "30px",
              margin: "3px"
            }}
            key={elem.id}
          >
            <div>{elem.name}</div>
            <div>{elem.description}</div>
            <div>{elem.group}</div>
          </article>
        ))}
      </div>
    );
  }
}

Task.defaultProps = {
  group: "Execute"
};

export const statementsData = [
  {
    id: 0,
    name: "first",
    description:
      "нализируйте день: выясняйте, что помешало выполнить все пункты вашего листа задач на день. По итогам решайт",
    group: "Execute"
  },
  {
    id: 1,
    name: "second",
    description:
      "Выделяйте приоритетные дела —  задачи, позволяющие достигать глобальных целей.",
    group: "Execute"
  },
  {
    id: 2,
    name: "third",
    description:
      "ййййцу йцу йцйцв йцв бальных целей. Ответьте на вопрос, насколько",
    group: "Performens"
  },
  {
    id: 3,
    name: "thirdqq",
    description: "о важная и срочная каждая задача и нельзя ли ",
    group: "Done"
  }
];

export default Task;
