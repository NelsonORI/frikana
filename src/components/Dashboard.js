import './Dashboard.css';

function Dashboard() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAkFBMVEVHcEwqSmssSmssSmskSmwsSmssSmssSmspSmssSmssSmslSmssSmsNERgsSmssSmsqSmssSmsrSmsGERksSmvzK0j4MU79ME3rM0/LNFEdFB7nM1H/ME3IM1CvOlnrM1DYNVPdNFLMMk91QWB6O1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG5wtlAAAAMHRSTlMAbqGYSF3/9mQjgS/9C9bwdFTECPoi2fW5yBDP/4K8//yu4kBqU15lb3mao6u5x9HB44EgAAABE0lEQVR4Ab2NVYLDMBBDVTI0MTRlZqb7325nXMYsvz/Jzxr8O5nsLbk8biiIB+4GHt4lblDfFXQuUHwlRPExqcJTwVghnZOU/HMhK5wGSpQyTwW6W8IbQTuRxTshJ5LyW0EKpaMo0plXQuUSXiz8ihAnvmhvBFv0SXwWXB6Ejy+CApF3QSAvqtbq9Qa88EoEPBfNVp7eKrAiMe0O0S2LfP54t8ZFD47WAW2qfc4NGKClGdS5GHAqg2gFYYgLQRhdcpeM/hhXBQ9MECiXjWl1R81JuXWBitHEMGVMZ7P5fD6bL5bXLObMbDadYrXebLbb7W6321+gRN1ms16tMA0TC+Lq/5IiD/BCmTEHWgfMkTKDND4AsWMpIYgBvjcAAAAASUVORK5CYII=" alt="Logo" width="40" height="30" />
                    Frikana Flight Services Ltd.
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/fuel">Fueling</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ground">Ground</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Dashboard;
