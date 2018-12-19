import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans:0 }
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans) // need this because can't get height until images are loaded
    }

    setSpans = () => {
        //console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans}) //es6 for {spans:spans}
    };

    render(){
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                ref={this.imageRef}
                alt={this.props.image.description}
                src={this.props.image.urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;

//destructured version
// class ImageCard extends React.Component {
//     render(){
        //const {description, urls} =this.props.image;
//         return (
//             <div>
//                 <img 
//                 alt={description}
//                 src={urls.regular}
//                 />
//             </div>
//         );
//     }
// }

// export default ImageCard;

