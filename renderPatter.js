class DisplayConversion extends React.Component {

    state = {
        to: '',
        from: '',
        rate: null
    }


    getConversion(from, to) {
        fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y`)
            .then(res => res.json())
            .then(res => {
                console.log(res[`${from}_${to}`])
                this.setState({
                    rate: res[`${from}_${to}`].val
                })
            })

    }
    handleFrom(e) {
        e.preventDefault()
        this.setState({
            from: e.target.value
        });
    }
    handleTo(e) {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            to: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        this.getConversion(this.state.from, this.state.to)
    }

    render() {
        return ( <
            div >
            <
            form onSubmit = {
                this.handleSubmit.bind(this)
            } >
            <
            p > Pick from: < input type = "text"
            name = "from"
            onChange = {
                this.handleFrom.bind(this)
            }
            /></p >
            <
            p > Pick to: < input type = "text"
            name = "to"
            onChange = {
                this.handleTo.bind(this)
            }
            /></p >
            <
            input type = "submit" / >
            <
            /form> {
                this.state.to == '' ? `Input Value` : `The conversion rate from ${this.state.to} to ${this.state.from} is ${this.state.rate}`
            }

            <
            /div>
        );
    }
}

const App = () => < DisplayConversion / >


    ReactDOM.render( < App / > ,
        document.getElementById('root'))



/***************************************************

# Your task

You are given some code that calls a web API and provides the result to a React component using the HOC pattern.

You need to refactor that code to use the render prop pattern instead.

Then, extend the code to take two parameters, `from` and `to`, and pass those to the API (hard-code the values for now)

Next, add some user inputs to allow the user to provide the from and to currencies


***************************************************/