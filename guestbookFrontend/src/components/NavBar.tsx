import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <div className="navbar bg-dark mb-3 mt-2" style={{borderRadius: '10px'}}>
                 <NavLink className='nav-item ms-auto me-2 text-decoration-none btn btn-primary' to='/reviews/newReview'>
                     Add Review
                 </NavLink>
            </div>
        </div>
    );
};

export default NavBar;