export default function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">

                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>

                <div className="col-4 p-3">
                    <img
                        src="/media/images/smallcaseLogo.png"
                        alt="smallcase"
                    />
                    <p className="text-small text-muted">
                        Our asset management venture that is creating simple
                        and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-4 p-3">
                    <img style={{width:"70%"}}
                        src="/media/images/streakLogo.png"
                        alt="smallcase"
                    />
                    <p className="text-small text-muted">
                        Our asset management venture that is creating simple
                        and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-4 p-3">
                    <img style={{width:"80%"}}
                        src="/media/images/sensibullLogo.svg"
                        alt="smallcase"
                    />
                    
                    <p className="text-small mt-3 text-muted">
                        Our asset management venture that is creating simple
                        and transparent index funds to help you save for your goals.
                    </p>
                </div>
                
                

            </div>
        </div>
    );
}