import NavBar from "./components/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Reviews from "./features/containers/Reviews.tsx";
import NewReview from "./features/containers/NewReview.tsx";

const App = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>

            <div>
                <Routes>
                    <Route path='/' element={<Reviews/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/reviews/newReview' element={<NewReview/>}/>
                    <Route path='*' element={<p>Not found</p>}/>
                </Routes>
            </div>
        </>
    );
};

export default App;