import "../App.css"

function Cards ({arr}) {
    return(
        <div id="RightContainer">
            {arr.map((card) => (
                <div className="CardContainer">
                    <div className="HeadContainer">
                    <img className="CardImg" alt="newImage" src={card.img}></img>
                    <h1 className="Title TimesNewRoman">{card.title}</h1>
                    </div>
                    <p className="CardText TimesNewRoman">{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Cards 