import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import TransactionBar from "./TransactionBar.jsx";
import Paper from '@mui/material/Paper';
const PrimaryDash = () => {
    return (
        <>
            <Paper>
                <h1 >Primary Dashboard</h1>
                <Header />
                <Sidebar />
                <Sidebar />
                <Sidebar />
                <TransactionBar />
            </Paper>
        </>
    )
}

export default PrimaryDash;