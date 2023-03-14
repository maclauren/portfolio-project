import './Home.css';
import Card from '../Card/card';

const Home = () => {
  return (
    <>
      <div className="card-container">
        <Card
          imageSrc="https://media.licdn.com/dms/image/C5603AQFzocXmbZKE-g/profile-displayphoto-shrink_800_800/0/1654457996557?e=2147483647&v=beta&t=md0f56u-1E4Ih-1-x5ki8KnRON7_8RqZ5NO8aSfW2MU"
          title="Lauren Macpherson Portfolio"
          description="After 5 years working on the commercial side of design, engineering and data businesses - I decided to get a bit closer to the tech side and start creating digital products. So I pivoted into Product Management and joined News UK, one of the largest publishing companies in the UK, working on their design system, NewsKit. More recently, I joined the growth team at The Times and The Sunday Times."
        />
      </div>
    </>
  );
};

export default Home;