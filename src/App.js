const App = () => {
  return (
    <div className='container'>
      <Avatar />
      <div className='content'>
        <Intro />
        <div className='skills'>
          <Skill skill='HTML+CSS' emoji='💪' color='orange' />
          <Skill skill='JavaScript' emoji='💪' color='green' />
          <Skill skill='Web Design' emoji='👶' color='orangered' />
          <Skill skill='React' emoji='💪' color='blue' />
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/user.jpg'}
      alt='Eniola Adewale'
    />
  );
};

const Intro = () => {
  return (
    <>
      <h1>Eniola Adewale</h1>
      <p>Software Engineer. I like anime, food and true crime documentaries.</p>
    </>
  );
};

const Skill = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default App;
