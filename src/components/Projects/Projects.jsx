const Projects = (props) => {
  return (
    <li>
      <h3>
        Hello, I'm a {props.name} and I'm a {props.type} project!
      </h3>
    </li>
  );
};

export default Projects;
