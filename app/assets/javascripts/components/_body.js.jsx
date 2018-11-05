class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fruits:[]
        };
        
        this.handleUpdate=this.handleUpdate.bind(this)
        this.handleSubmit=this.handleFormSubmit.bind(this)
        this.addNewFruit=this.addNewFruit.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.deleteFruit=this.deleteFruit.bind(this)

    }

    addNewFruit(fruit){
        this.setState({
            fruits:this.state.fruits.concat(fruit)
        })
    }
    deleteFruit(id){
        newFruits=this.state.fruits.filter((fruit)=>fruit.id !== id)
        this.setState({
            fruits: newFruits
        })
    }
    updateFruit(fruit){
        let newfruits=this.state.fruits.filter((f) => f.id !== fruit.id)
        newfruits.push(fruit)
        this.setState({
            fruits:newfruits
        })
    }

    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/fruits/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
           // console.log('Fruits has been deleted succesfully')
           this.deleteFruit(id)
        })
    }

    handleUpdate(fruit){
        fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`,{
            method:'PUT',
            body: JSON.stringify({fruit: fruit}),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            this.updateFruit(fruit)
        })
    }
    

    handleFormSubmit(name, description){
        let body=JSON.stringify({fruit: {name: name, description: description}})

        fetch('http://localhost:3000/api/v1/fruits',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:body,

        }).then((response)=>{return response.json()})
        .then((fruit)=>{
            this.addNewFruit(fruit)
        })
        //console.log(name, description);
    }



    componentDidMount(){
        fetch('/api/v1/fruits.json')
            .then((response)=>{return response.json() })
            .then((data)=>{this.setState({fruits: data}) });
    }


    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <NewFruit handleFormSubmit={this.handleFormSubmit}/>
                    <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                </div>
            </div>
        )
    }
}