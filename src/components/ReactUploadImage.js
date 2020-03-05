import React from 'react'
const axios = require("axios");


class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // console.log(formData , config)
        axios.post("/uploadphoto",formData,config)
        .then((response) => {
            // debugger
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }

    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <>
            <form onSubmit={this.onFormSubmit}>
                <h1>Image Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
            <button>Post</button>
            </>
        )
    }
}

export default ReactUploadImage