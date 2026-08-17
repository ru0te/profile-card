const App = () => {
  const image = '/images/user.jpg';
  return (
    <div className='container'>
      <img src={image} alt='' />
      <div className='content'>
        <h1>Eniola Adewale</h1>
        <p>
          Software Engineer. I like anime, food and true crime documentaries.
        </p>
        <div className='skills'>
          <Skill>HTML + CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Web Design</Skill>
          <Skill>Git and Github</Skill>
          <Skill>React</Skill>
        </div>
      </div>
    </div>
  );
};

const Skill = (props) => {
  return (
    <p style={{ backgroundColor: '#000', padding: '5px', borderRadius: '5px' }}>
      {props.children}
    </p>
  );
};

export default App;
