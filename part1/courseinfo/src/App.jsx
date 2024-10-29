const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part section={props.parts[0].section} lessons={props.parts[0].lessons} />
      <Part section={props.parts[1].section} lessons={props.parts[1].lessons} />
      <Part section={props.parts[2].section} lessons={props.parts[2].lessons} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
        {props.section} {props.lessons}
    </p>
  )
}

const Total = (props) => {
  console.log(props);
  var total = 0;
  for(var i = 0; i < props.parts.length; i++) {
    total += props.parts[i].lessons;
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      { section: 'Fundamentals of React', lessons: 10 },
      { section: 'Using props to pass data', lessons: 7 },
      { section: 'State of a component', lessons: 14 }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App