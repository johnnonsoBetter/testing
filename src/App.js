
import './input.css';
import './App.css';
import Notification from './components/notifications/mini_view/Notification';
import NoActivityNotification from './components/NoActivityNotification';
import AllNotification from './components/notifications/all/AllNotification';
import Search from './components/search/Search';
import NetworkView from './components/network_view/NetworkView';
import NetworkDirectory from './components/network_directories/NetworkDirectory';

function App() {
  return (
    <>
      
      <div className="App grid p-6 grid-cols-2 gap-4   justify-around my-8">
  
          <p className="font-semibold my-3 text-xl text-neutralprimary col-span-2" > Notifications Components</p>
          <Notification />
          <Notification loading={true} />
          <AllNotification />
          <NoActivityNotification />
        
      </div>

      <div className="App grid p-6 grid-cols-3 gap-5  justify-around my-8">
        <div >
          <p className=" my-3 text-xl text-neutralprimary" > Search Components</p>
          <Search />
        </div>

        
          <div className="col-span-2" >
            <p className=" my-3 text-xl text-neutralprimary" > Network Directory Components</p>
            <NetworkDirectory />
          </div>
        

        <div className="col-span-2" >
          <p className=" my-3 text-xl text-neutralprimary" > Network View Components</p>
          <NetworkView />
        </div>
      </div>

    </>
  );
}

export default App;
