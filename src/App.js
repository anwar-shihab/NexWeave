import SideBar from './components/SideBar';
import Campaign from './components/Campaign';

import './image/image1.png'


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className='row floor'>
          <div className="col-lg-10 col-md-10 col-sm-10 offset-1 mt-5">
            <div className='card mt-5'>
              <div className="card-body main-card-body row m-0 p-0">
                <div className="col-lg-2 bar">
                  <SideBar />
                </div>

                <Campaign />

              </div>
              <div className="card-footer m-0 p-0 row">
                <div className="logout d-flex col-2 py-3">
                  <i className="fa fa-sign-out fa-flip-horizontal"></i>
                  <label>Logout</label>
                </div>
                <div className='row col-10 paging m-0'>
                  <p className="col-6 results">
                    Showing results 4 of 25
                  </p>
                  <div className="pageNo col-6 text-end">
                    <i className="fa fa-chevron-left cl"></i>
                    <label>Prev</label>
                    <button className="btn btn-secondary">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                    <label>Next</label>
                    <i className="fa fa-chevron-right cr"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-2 col-2">
              <div className="card-body card-body1">
                <h5>Upgrade to Pro</h5>
                <p>Read more <i className="fa fa-chevron-right fa-chevron-right1"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
