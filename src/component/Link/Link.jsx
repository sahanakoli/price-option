/* eslint-disable react/prop-types */
const Link = ({route}) => {
    return (
        <li className="mr-3 px-1 hover:bg-slate-50 rounded-lg">
        <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;