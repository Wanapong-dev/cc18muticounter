console.log(ReactDOM)
function App() {

    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 },
    ])

    const updateCounter = (id, n) => {
        let idx = counters.findIndex(el => el.id === id)
        console.log('counters array no.', idx)
        const newCounters = [...counters]
        if (newCounters[idx].number + n < 0) {
            return
        } else {
            newCounters[idx].number += n
        }
        setCounters(newCounters)
    }

    const sum = counters.reduce((prev, curr) => {
        return prev + curr.number
    }, 0)

    const addCounter = () => {
        setCounters([...counters, { id: counters.length + 1, number: 0 }])
    }

    const remove = (id) => {
        setCounters(item => item.filter(el => el.id != id))
    }

    return (

        <div className='app'>
            <h1 className="show-sum">Sum = {sum} </h1>
            <button onClick={() => { addCounter() }} className="btn-add">Add Counter</button>
            <br />
            <hr />
            {counters.map(el => {
                console.log(el.id)
                return <Counter key={el.id} item={el} updateCounter={updateCounter} remove
                    ={remove} />
            }
            )}

        </div>

    )
}



function Counter(props) {
    const { item, updateCounter, remove } = props
    return (
        <div className="counter">
            <button onClick={() => updateCounter(item.id, -1)} className="btn btn-inc">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, +1)} className="btn btn-inc">+</button>
            <button onClick={() => updateCounter(item.id, -item.number)} className="btn btn-inc">C</button>
            <button onClick={() => remove(item.id)} className="btn btn-clr">X</button>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)