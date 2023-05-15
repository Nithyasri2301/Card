import React from "react"

class Card extends React.Component {
    render() {
        return (


            <div className="card">
                <img src={this.props.source} alt="" />
                <h1>{this.props.head}</h1>
                <p>{this.props.p}</p>


            </div>)
        //  <div className="card">
        //     <img src="https://tse1.mm.bing.net/th?id=OIP.AJD7_gJztW9IZHzlkNLQswHaFj&pid=Api&P=0" alt="" />
        //     <h1>MI</h1>
        //     <p>Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles.</p>                    

        // </div>
        // <div className="card">
        //     <img src="https://wallpapercave.com/wp/wp6547423.jpg" alt="" />
        //     <h1>RR</h1>
        //     <p>Rajasthan Royals (often abbreviated as RR) are a franchise cricket team based in Jaipur, Rajasthan, that plays in the Indian Premier League (IPL). Founded in 2008 as one of the initial eight IPL franchises, the team is based at the Sawai Mansingh Stadium in Jaipur. </p>


        // </div>
        // <div className="card">
        //     <img src="https://tse3.mm.bing.net/th?id=OIP.M97I6LWdn6dhqD-AMvrIRgHaFJ&pid=Api&P=0" alt="" />
        //     <h1>GT</h1>
        //     <p>Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League (IPL). Founded in 2021, Gujarat Titans' home ground is Narendra Modi Stadium in Motera. The franchise is owned by CVC Capital Partners. </p>

        // </div>


    }
}
export default Card;


