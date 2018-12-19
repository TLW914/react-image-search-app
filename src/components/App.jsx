import React from 'react';
import unsplash from '../api/unsplash.jsx';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        //console.log(term)
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
        });
        console.log(response.data.results)
        this.setState({images: response.data.results})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/> 
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
};

export default App;


//other way to handle async call with aync/await

// onSearchSubmit = async (term) => {
//     //console.log(term)
//     const response = unsplash.get('https://api.unsplash.com/search/photos', {
//         params: {query: term},
//     });
//     //console.log(response.data.results)
//     this.setState({images: response.data.results})
// }

//one way to handle the async request would be with promises (see below .then 
//--we also used this to find our results). 
//instead of promise way below,  we did async/await above

// onSearchSubmit(term){
//     //console.log(term)
//     axios.get('https://api.unsplash.com/search/photos', {
//         params: {query: term},
//         headers:{
//             Authorization: 'Client-ID api key'
//         }
//     }).then((response)=> {
//         console.log(response)
//         console.log(response.data.results) //how we found to get to the array of objects
//     })
// }



