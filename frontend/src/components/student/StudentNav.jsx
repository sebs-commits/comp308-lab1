const StudentNav = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Student Dashboard</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Profile</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default StudentNav;