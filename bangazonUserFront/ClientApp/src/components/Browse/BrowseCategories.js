import React from 'react';
import { Table } from 'react-bootstrap';

import './BrowseCategories.css';
import ProductRequests from '../Requests/ProductRequests';

//import placeholder for firebase

class BrowseCategories extends React.Component {
    state = {
        categories: [],
        originalCategories: [],
        value: ''
    };

    //*********SEARCH DATABASE FOR USER INPUT AND COLLECT MATCHES*******//
    componentDidMount() {
        const keepers = [];
        ProductRequests
            .GetAll()
            .then((categories) => {
                this.setState({
                    categories: categories
                });
            })
            .catch(error => console.log(error));
        //this.setState({ originalCategories: categories });
        //    const copyOfOriginal = [...categories];
        //    copyOfOriginal.forEach((categories) => {
        //        const foundCategory = keepers.find((keepCategory) => {
        //            return keepCategory.uniqueCategoryKey === categories.uniqueCategoryKey;
        //        });
        //        if (foundCategory === undefined) {
        //            keepers.push(categories);
        //        }
        //    });
        //    this.setState({ categories: keepers });
        //})
        //.catch((error) => {
        //    console.error('error with retrieving categories', error);
        //});

    }


    //***********STANDARDIZE CASE OF SEARCH & DATABASE INPUT************//
    //componentWillReceiveProps() {
    //    const searchInput = this.props.value;
    //    const categories = [...this.state.originalCategories];
    //    const filterCategories = categories.filter(category => category.category.toLowerCase().includes(searchInput.toLowerCase()));
    //    this.setState({ categories: filterCategories });
    //}

    render() {
        const { categories } = this.state;
        const categoryComponents = categories.map((category) => (
            <div key={category.categoryId}>
                <Table className="table table-bordered table-striped">

                    <tbody>
                        <tr>
                            <td>{category.category}</td>
                            <td>{category.title}</td>
                            <td>{category.description}</td>
                            <td>{category.price}</td>
                            <td>{category.quantity}</td>

                        </tr>
                    </tbody>
                </Table>
            </div>


        ));

        return (
            <div >

                <Table hover>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>

            

                </Table>
            </div>

           
        );
    }
}

export default BrowseCategories;