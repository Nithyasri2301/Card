
import './App.css';
import Card from './Component/card';
import "./cardstyle.css"
function App() {
  const img="https://wallpapercave.com/wp/wp4166483.jpg",title="CSK",para="Chennai Super Kings (CSK) is an Indian Premier League (IPL) franchise cricket team based in Chennai, Tamil Nadu, India. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai."
  const img1="https://tse1.mm.bing.net/th?id=OIP.AJD7_gJztW9IZHzlkNLQswHaFj&pid=Api&P=0",title1="MI",para1="Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles."
  const img2="https://wallpapercave.com/wp/wp6547423.jpg",title2="RR",para2="Rajasthan Royals (often abbreviated as RR) are a franchise cricket team based in Jaipur, Rajasthan, that plays in the Indian Premier League (IPL). Founded in 2008 as one of the initial eight IPL franchises, the team is based at the Sawai Mansingh Stadium in Jaipur"
  const img3="https://tse3.mm.bing.net/th?id=OIP.M97I6LWdn6dhqD-AMvrIRgHaFJ&pid=Api&P=0",title3="GT",para3="Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League (IPL). Founded in 2021, Gujarat Titans' home ground is Narendra Modi Stadium in Motera. The franchise is owned by CVC Capital Partners."
  return (
    <div className="container">
      
      
      <Card source={img} head={title} p={para}/>
      <Card source={img1} head={title1} p={para1}/>
      <Card source={img2} head={title2} p={para2} />
      <Card source={img3} head={title3} p={para3} />

      
  
    
    </div>
  );
}

export default App;
