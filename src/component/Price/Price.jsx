/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";

const Price = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="p-4 mt-4 bg-cyan-600 rounded-md flex flex-col text-white">
         <h2 className="text-center">
            <span className="text-6xl">{price}</span>
            <span className="text-3xl">/mon</span>
         </h2>
         <h4 className="text-3xl text-center my-8">{name}</h4>
         <div className="pl-6 flex-grow">
            {
               features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-slate-800 w-full py-2 font-bold rounded-lg hover:bg-green-900">Buy Now</button>   
        </div>
    );
};

export default Price;