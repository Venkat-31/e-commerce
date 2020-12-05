import React from 'react';
import './App.css';
import { Table } from './Table';

export default class App extends React.Component<{},{}> {

    students = [
        {name:'Venkatesh'},
        {name:'Vincent'},
        {name:'KaliDevi'},
        {name:'DharaniPriya'}
    ]

    render() {
        console.log("App render");
        
        return (
            <div className='App'>
                <Table students={this.students}/>
            </div>
        );
    }
}

// interface App1Props {
//     name: string;
//     Vincent: (newVal: string) => void;
// }
// interface App1State {
//     userName: string;
// }
// class App1 extends React.Component<App1Props, App1State> {
//     state = {
//         userName: 'Vincent',
//     };
//     constructor(props: App1Props) {
//         super(props);
//     }

//     handleEvent = (e: any) => {
//         console.log(e.target.value);
//         this.props.Vincent(e.target.value);
//         // this.props.name = e.target.value;
//         this.setState({ userName: e.target.value });
//     };

//     render() {
//         console.log('render called');

//         return (
//             <div>
//                 <h1>{this.state.userName}</h1>
//                 <input value={this.state.userName} onChange={this.handleEvent} />
//             </div>
//         );
//     }
// }

// export default App;
