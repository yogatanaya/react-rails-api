class Fruit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editable: false
        }
        this.handleEdit=this.handleEdit.bind(this)
    }
    handleEdit(){
        if(this.state.editable){
            let name=this.name.value;
            let description=this.description.value;
            let id=this.props.fruit.id;
            let fruit={
                id:id,
                name:name,
                description:description
            }
            this.props.handleUpdate(fruit)
        }
        this.setState({
            editable:!this.state.editable
        })
    }
    render(){

        // name
        let name=this.state.editable ? <input className='form-control' type='text' ref={input=>this.name=input} 
        defaultValue={this.props.fruit.name}/>:<h3>{this.props.fruit.name}</h3>
        
        // description
        let description = this.state.editable ? <input className='form-control' type='text' ref={input=>this.description=input}
        defaultValue={this.props.fruit.description}/>:<h3>{this.props.fruit.description}</h3>
        return(
            <div>
                {name}
                <br/>
                {description}
                <hr/>
                <button className='btn btn-info' onClick={()=>this.handleEdit()}>{this.state.editable ? "Submit" : "Edit"}</button>
                &nbsp;
                <button className='btn btn-danger' onClick={()=>this.props.handleDelete(this.props.fruit.id)}>Delete</button>
            </div>
        )
    }
}