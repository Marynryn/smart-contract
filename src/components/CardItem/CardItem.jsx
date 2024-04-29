
import Button from 'components/Button/Button';
import Location from 'components/Location/Location';
import Price from 'components/Price/Price';
import Rating from 'components/Rating/Rating';
import Reviews from 'components/Reviews/Reviews';
import calculateAge from 'helpers/calculateAge';
import React, { useState } from 'react'

const CardItem = ({ props }) => {

    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const age = calculateAge(props.birthday);
    return (
        <div className="">
            <div>
                <img className="" alt="nanny`s_photo" src={props.avatar_url} width={96} height={96} />
            </div>
            <div className="">
                <div className="">
                    <p>Nanny</p>
                    <h3 className="">{props.name}</h3>

                </div>
                <div className="flex">
                    <Location props={props} />
                    <Rating props={props} />
                    <Price props={props} />
                </div>
                <div className='flex'>
                    <ul >
                        <li>
                            <p>Age: {age}</p>
                        </li>

                        <li >
                            <p>Experience: {props.experience}</p></li>
                        <li >  <p>Kids age: {props.kids_age}</p></li>
                        <li >  <p>Characters:{props.characters}</p></li>
                        <li > <p>Education: {props.education}</p></li>


                    </ul>
                </div>
                <p className="">{props.about}</p>
                {!expanded && (

                    <Button className="" type={"button"} onClick={handleToggleExpand}>Read more</Button>)}
                {expanded && (
                    <div className="card-content">
                        <Reviews user={props} />
                    </div>
                )}
            </div>

        </div>)
}

export default CardItem;