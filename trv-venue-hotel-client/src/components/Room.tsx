import React from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import { Link } from 'react-router-dom';
import { RoomObject } from '../models/models';

interface IRoomProps {
    room: RoomObject;
}

const Room: React.FC<IRoomProps> = React.memo((props) => {
    const { name, roomId, img, price } = props.room;
    
     console.log(img,'room');
    return (
        <article className="room">
            <div className="img-container">
                <img src={img|| defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${roomId}`} className="btn-primary room-link">features</Link>
             </div>
             <p className="room-info">{name}</p>
        </article>
    )
})

export default Room;

// React.memo
// Class components can bail out from rendering when their input props are 
// the same using PureComponent or shouldComponentUpdate. Now you can do the 
// same with function components by wrapping them in React.memo.
