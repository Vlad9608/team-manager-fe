import './Home.css'

const Home = () => {
    return ( 
        <div className="Home">
            <div className="description">
                <div className="title">Football Team Management</div>
                <button>Show Teams</button>
            </div>
            <img className="trophy" src="data:image/jpeg;base64,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"></img>
        </div>
     );
}
 
export default Home;