import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
            .then(() => {
                this.props.history.push('/products')
            })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name:</label>
                    <input className="form-control" name="name" type="text" onChange={this.handleChange} value={this.state.name} />

                </div>
                <div>
                    <label htmlFor="price">
                        Price:</label>
                    <input className="form-control" name="price" type="text" onChange={this.handleChange} value={this.state.price} />

                </div>
                <div>
                    <label htmlFor="discount">
                        Discount:</label>
                    <input className="form-control" name="discount" type="text" onChange={this.handleChange} value={this.state.discount} />

                </div>
                <div>
                    <label htmlFor="availability">
                        Availability:</label>
                    <select className="form-control" name="availability" onChange={this.handleChange}>
                        <option>instock</option>
                        <option>backordered</option>
                        <option>discontinued</option>
                    </select>

                </div>
                <button disabled={this.state.name.length === 0 || this.state.price.length === 0 ? true : false} className="btn btn-primary" type="submit">Create</button>
            </form>
        )
    }
}

export default withRouter(CreateProduct)