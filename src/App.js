import Cards from './Card';
import './App.css';
import LeftPart from './LeftPart';

function App() {
  return (
    <div className="App">
      <LeftPart/>
      <div>
        <Cards arr={[
          {
          img:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7857653.jpg",
          title:"Form",
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          },

          {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI544bEc7EoHfcAv5SIGq814XA_9wmhpNRA&usqp=CAU",
            title:"Form",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          },

          {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6_L86nca9iXzbE6dfAaf7ejWiQhjAdlueQ&usqp=CAU",
            title:"Form",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          },

          {
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1ziL_4d_9rM5y6vkQJj21Usy0lHhIds0yg&usqp=CAU",
            title:"Form",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
          },
          ]}/>
      </div>
    </div>
  );
}

export default App;
