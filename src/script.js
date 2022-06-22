class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.89,
      usd: 1,
      euro: 1 * 0.89,
      };
      
       this.handleUsdChange = this.handleUsdChange.bind(this);
       this.handleEuroChange = this.handleEuroChange.bind(this);
  }

  //function converting to USD
  toUsd(amount, rate) {
    return amount * (1 / rate);
  }

  toEuro(amount, rate) {
    return amount * rate;
  }

  //update the state when euro input and usd input are changed
  convert(amount, rate, equation) {
    const input = parseFloat(amount); //convert it to a floatingpoint number. because value of input is not a number
    if (Number.isNaN(input)) {
      //if input is not a number, ->update usd and euro to empty string
      return "";
    }

    return equation(input, rate).toFixed(3); // toFixed() method will round the resulting value
  }
  handleUsdChange(event) {
    const euro = this.convert(event.target.value, this.state.rate, this.toEuro);

    this.setState({
      usd: event.target.value,
      euro,
    }); //update initial state
  }

  handleEuroChange(event) {
    const usd = this.convert(event.target.value, this.state.rate, this.toUsd);
    this.setState({
      euro: event.target.value,
      usd,
    });
  }

  render() {
    const { rate, usd, euro } = this.state;

    return (
      <div className="container">
        <div className="text-center p-3 mb-2">
          <h2 className="mb-2">Currency Converter</h2>

          <h4>USD 1 : {rate} EURO</h4>
        </div>

        <div className="row text-center">
          <div className="col-12">
            <span className="mr-1">USD</span>
            <CurrencyInput value={usd} handleChange={this.handleUsdChange} type="number" />
            <span className="mx-3">=</span>
            <CurrencyInput
              value={euro}
              handleChange={this.handleEuroChange}
              type="number"
            />
            <span className="ml-1">EURO</span>
          </div>
        </div>
      </div>
    );
  }
}

class CurrencyInput extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
          <input value={value} onChange={handleChange} type="number" /> //{value} = value in class  CurrencyConverter,{handleChange} = handleChange handler
        );
    }
}

ReactDOM.render(
  <CurrencyConverter />,

  document.getElementById("root")
);
