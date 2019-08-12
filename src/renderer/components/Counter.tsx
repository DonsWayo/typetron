import * as React from 'react';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CounterState, incrementCounter, decrementCounter } from '../store/counter';

require('./Counter.scss');

export interface CounterProps {
    readonly increment: () => void;
    readonly decrement: () => void;
    readonly count: number;
}

const Counter: React.FunctionComponent<CounterProps> = ({ increment, decrement, count }: CounterProps) => (
    <div className="counter">
        <p id="counter-value">Current value: {count}</p>
        <p>
            <button id="increment" onClick={increment}>
                +
            </button>
            <button id="decrement" onClick={decrement}>
                -
            </button>
        </p>
    </div>
);

const mapStateToProps = (state: CounterState) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);