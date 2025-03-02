const Projects = (props) => {
  // const { project } = props; //Confused about what the advantage/disadvantage is to destructing in line 1-Last set of notes in "React Components-Destructuring Props"
  return (
    <li>
      <h3>
        Hello, I'm {props.name} and I'm a/an {props.type} {""}
        project!
      </h3>
    </li>
  );
};

export default Projects;
