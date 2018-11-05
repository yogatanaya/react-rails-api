const AllFruits=(props)=>{
    var fruits=props.fruits.map((fruit)=>{
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col l12 s12' key={fruit.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div>
            {fruits}
        </div>
    )
}