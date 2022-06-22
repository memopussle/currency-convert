# Build a currency converter

- This is an exercise to illustrate the component based structure and state handling in React. How to pass state from parent component to child component


### The component

1. Store the US dollar and the Europe amount in the component state

2. Changing the USD amount will update the USD state and the Euro state after conversion

3. Changing the Europe amount will update the Europe state and the USD state after conversion

### Create functions to handle usd and euro input change

- If input is not a number or empty, we reset state of usd and euro to an empty string

- If input is a number, perform calculation and update initial state through setState method

### Extracting inputs into its own custom component

- firstly, use destructure method to set value and handler belong to this.props ( class CurrencyConverter)

- pass props from parent component to input
```

...
         <CurrencyInput value={usd} handleChange={this.handleUsdChange} /> //in CurrencyConvert class
                         \               \
                          \               \
...                        \               \      
    return <input value={value} onChange={handleChange} type="number" /> //in CurrencyInput class
```