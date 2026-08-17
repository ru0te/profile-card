const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'intermediate',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'beginner',
    color: '#60DAFB',
  },
];

const App = () => {
  return (
    <div className='container'>
      <Avatar />
      <div className='content'>
        <Intro />
        <ul className='skills'>
          {skills.map((item) => (
            <Skill
              skill={item.skill}
              level={item.level}
              color={item.color}
            ></Skill>
          ))}
        </ul>
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

const Skill = ({ skill, level, color }) => {
  let levelEmoji;
  switch (level) {
    case 'beginner':
      levelEmoji = '👶';
      break;
    case 'intermediate':
      levelEmoji = '👍';
      break;
    case 'advanced':
      levelEmoji = '💪';
      break;
    default:
      break;
  }
  return (
    <li
      style={{
        backgroundColor: color,
      }}
    >
      <span>{skill}</span>
      <span>{levelEmoji}</span>
    </li>
  );
};

export default App;
