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
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <ul className="categoryComp">{this.props.data.dataFilter}</ul>
                </div>
            </div>
            );
        
    }
}

export default BrowseCategories;
