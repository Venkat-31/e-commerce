import React from 'react';
import Button from 'react-bootstrap/esm/Button';

interface Student {
    name: string;
}

interface TableProps {
    students: Student[];
}

export class Table extends React.Component<TableProps, {}> {
    constructor(props: TableProps) {
        super(props);
    }

    handleEvent(name:string){
        console.log(name);
        
    }

    render() {
        console.log("render");
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((item: Student, index:number) => (
                        <tr>
                        <td>{item.name}</td>
                        <td><Button onClick={()=>this.handleEvent(item.name)}>Click</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export class TableRow extends React.Component<{ student: Student }, {}> {


    componentDidMount(){
        console.log("componentDidMount",this.props.student);
            
    }

    handleEvent (name:string) {
        console.log(name);
    }

    render() {
        console.log(this.props.student);
        
        return (
            <tr>
                <td>{this.props.student.name}</td>
                <td><Button onClick={()=>this.handleEvent(this.props.student.name)}>Click</Button>
                </td>
            </tr>
        );
    }
}
