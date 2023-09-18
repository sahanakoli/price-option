/* eslint-disable react/prop-types */
import {AiFillCheckCircle} from 'react-icons/ai';
const Feature = ({feature}) => {

    return (
        <div>
           <p className="flex items-center ">
            <AiFillCheckCircle className='text-white-500 mr-3'></AiFillCheckCircle> {feature}
            </p> 
        </div>
    );
};

export default Feature;