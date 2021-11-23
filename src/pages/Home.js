import React, {Component} from 'react';
import './Home.css';

class Home extends Component
{
    state={
        file: null
    }
    handleFile(e){
        let file= e.target.files[0];
        this.setState({file: file})
    }

    handleUpload(e){
        console.log(this.state, "The state ---- $$$$");
    }

    render(){
        return(
            <div className="home">
            <h1>Upload your image</h1><br/>
           
            <form action="/action_page.php">
                <div className="selectf">
                    <label className="f1"> Select file</label>&nbsp;&nbsp;
                    <input type="file" onChange={(e)=>this.handleFile(e)}/>
                </div>
                <br/>
                
                <button class="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
            </form>
            </div>
        )
    }
}
export default Home;
