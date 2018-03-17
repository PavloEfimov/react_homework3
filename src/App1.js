import React from 'react';


export default class App1 extends React.Component {


    state = {
        galleryItems: []
    };


    componentWillMount() {

        () => { console.log('test777') }

    }

    _console = () => {
        return (
            console.log(this)
        )
    }


    render() {
        return ( <
            div >
            <
            div > test App1 < /div>

            <
            button onClick = { this._console } > console < /button> <
            /div>
        )

    }


}