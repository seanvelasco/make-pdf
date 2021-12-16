import Viewport from './layout/Viewport';
import Sidebar from "./layout/Sidebar";
import './index.css';


function App () {

    return  (
        <>
        <div className='landing'>
            <Sidebar />
            <Viewport src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
        </div>
        </>
    )
}

export default App;