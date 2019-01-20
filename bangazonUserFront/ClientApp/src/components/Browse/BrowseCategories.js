import react from 'react';

import './Search.css';

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

    }


    //***********STANDARDIZE CASE OF SEARCH & DATABASE INPUT************//
    componentWillReceiveProps() {
        const searchInput = this.props.value;
        const categories = [...this.state.originalCategories];
        const filterCategories;
    }

    render() {

    }

    return(

    );
}

export default BrowseCategories