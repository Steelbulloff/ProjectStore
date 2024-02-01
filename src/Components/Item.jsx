export default function Item({discount,name,cost,img,bonus}){
    return(
        <div className="item">
            <div className="title">
                <h4 className="discount">
                    {discount}
                </h4>
                <h4 className="bonus">
                    {bonus}
                </h4>
            </div>
            <div className="img-div">
                <img src={img && require(`../img/${img}`)} className="item-img" alt="ТОВАР"/>
            </div>
            <div className="item-name">
                <h3 className="name">{name}</h3>
                <p className="cost">{cost}</p>
            </div>
        </div>
    )
}