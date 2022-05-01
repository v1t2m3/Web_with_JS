export default function LogIn2(props) {
    return (
        <div className="col-4 mx-auto">
            <form>
                <div className="d-flex justify-content-center my-5">
                    <i
                        className="bi bi-meta"
                        style={{
                            fontSize: "8rem",
                            display: "flex",
                            margin: "auto 0",
                        }}
                    ></i>
                </div>
                <h1 className="text-center my-5">Welcome {props.user}!</h1>
                <h1 className="text-center my-5">
                    Your password:{props.password}
                </h1>
                <div className="d-grid">
                    <button
                        className="btn btn-primary"
                        onClick={(e) => {
                            props.value(e);
                        }}
                    >
                        Log out
                    </button>
                </div>
            </form>
        </div>
    );
}
