import Head from 'next/head';
import React from 'react';
import MyApp from '../_app.js'



class LoaderLogo extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        this.isLoading = setTimeout(() => { this.setState({ loading: false }) }, 2300);
    }
    componentWillUnmount() {
        clearTimeout(this.isLoading);
    }

    timer = () => setTimeout(() => {
        this.setState({ loading: false })
    }, 2300);

    render() {
        const { loading } = this.state;
        return (
            // <div>
            //     loading ?
            //     (<div className="content">
            //         <div> <img
            //             src="../loader.gif"
            //             width="auto"
            //             height="150"
            //             className="d-inline-block align-top"
            //             alt="React Bootstrap logo"
            //         />
            //         </div>
            //     </div>) : null
            // </div>

            <div class="d-flex align-items-center justify-content-center loader-sec">
                {/* <div class="p-2 bd-highlight col-example">Flex item</div> */}
                <img
                    src="../loader.gif"
                    width="auto"
                    height="250"
                    className="p-2 bd-highlight col-example loader-logo"
                    alt="React Bootstrap logo"
                />
            </div>
        );
    }
}

export default LoaderLogo;