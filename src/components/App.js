import React from 'React';
import { Layout } from 'antd';
import Login from './Login/Login';
import { Header, Footer } from './Navigation/index';

const App = () => {
    return (
        <div>
            <Layout>
                <Header></Header>
                <Login></Login>
                <Footer></Footer>
            </Layout>
        </div >
    );
}

export default App;