import React from 'react'
import axios from 'axios'

class CreateProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
        }

    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, () => console.log(this.state))
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('/api/products', this.state)
            .then(() => {
                this.props.getData();
                this.setState({
                    name: '',
                    price: '',
                    discount: ''
                })
            })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name:
               <input className="form-control" name="name" type="text" onChange={this.handleChange} value={this.state.name} />
                    </label>
                </div>
                <div>
                    <label htmlFor="price">
                        Price:
               <input className="form-control" name="price" type="text" onChange={this.handleChange} value={this.state.price} />
                    </label>
                </div>
                <div>
                    <label htmlFor="discount">
                        Discount:
               <input className="form-control" name="discount" type="text" onChange={this.handleChange} value={this.state.discount} />
                    </label>
                </div>
                <div>
                    <label htmlFor="availability">
                        Availability:
                        <select className="form-control" name="availability" onChange={this.handleChange}>
                            <option>instock</option>
                            <option>backordered</option>
                            <option>discontinued</option>
                        </select>
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">Create</button>
            </form>
        )
    }
}

export default CreateProduct