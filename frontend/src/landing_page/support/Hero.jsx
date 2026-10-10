export default function Hero() {
    return (
        <section className="container-fluid p-5" id="supporthero">

            {/* Top row */}
            <div className="row px-5 pt-4">
                <div className="col-7">
                    <h4>Support Portal</h4>
                </div>

                <div className="col-5 text-start">
                    <a href="" style={{ color: "white" }}>
                        Track Tickets
                    </a>
                </div>
            </div>

            {/* Main row */}
            <div className="row px-5 mt-4">

                <div className="col-7 pe-md-5">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics<br />
                        to create a ticket
                    </h1>

                    <input
                        type="text"
                        placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                        className="form-control mt-3"
                    />

                    <div className="mt-3">
                        <a href="" style={{ color: "white" }}>
                            Track account opening
                        </a>
                        &nbsp;&nbsp;

                        <a href="" style={{ color: "white" }}>
                            Track segment activation
                        </a>
                        &nbsp;&nbsp;

                        <a href="" style={{ color: "white" }}>
                            Intraday margins
                        </a>
                        &nbsp;&nbsp;

                        <a href="" style={{ color: "white" }}>
                            Kite user manual
                        </a>
                    </div>
                </div>

                <div className="col-5">
                    <h1 className="fs-5">Featured</h1>

                    <a href="" style={{ color: "white" }}>
                        1. Current Takeovers and Delisting - January 2024
                    </a>
                    <br /><br />

                    <a href="" style={{ color: "white" }}>
                        2. Latest Intraday leverages - MIS & CO
                    </a>
                </div>

            </div>

        </section>
    );
}