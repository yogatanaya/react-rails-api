const NewFruit=(props)=>{
    let formFields={}
    return(
        <div className='container'>
            <div className='row'>
                <div className='col l6 s12'>
                    <form onSubmit={(e)=>{
                        props.handleFormSubmit(formFields.name.value, formFields.description.value);
                        e.target.reset();}
                        }>
                        <input ref={input=>formFields.name=input} placeholder="Fruit Name..." className='form-control'/>
                        <br/>
                        <textarea ref={input=>formFields.description=input} placeholder="Fruit Description..." className='form-control'/>
                        <br/>
                        <button className='btn btn-primary'>Submit</button>
                    </form>
                    <hr/>
                </div>
            </div>
        </div>
    )
}