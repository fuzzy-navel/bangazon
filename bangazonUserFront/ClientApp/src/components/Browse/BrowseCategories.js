import React from 'react';
import { Table } from 'react-bootstrap';

import './BrowseCategories.css';
import ProductRequests from '../Requests/ProductRequests';


class BrowseCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: []
        };
    }

    
    componentDidMount() {
        ProductRequests
            .GetAll()
            .then((data) => {
                this.setState({
                    data: data
                });
            })
            .catch(error => console.log(error));
    }

    //*********SEARCH DATABASE FOR USER INPUT AND COLLECT MATCHES*******//

    filterData = (dataFilter) => {
        let filteredData = this.state.data;
        filteredData = filteredData.filter((data) => {
            const dataName = data.title.toLowerCase();
            return dataFilter.indexOf(
                dataFilter.toLowerCase()) !== -1;
        });
        this.setState({
            filteredData
        });

    }

    render() {
        const { data } = this.state;
        const dataComponent = data.map((data) => (
            <div key={data.id}>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>{data.title}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        ));
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <ul className="categoryComp">{dataComponent}</ul>
                </div>
            </div>
            );
        
    }//this.props.data.dataFilter
}

export default BrowseCategories;
