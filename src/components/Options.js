import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>
                Remove all options
            </button>
        </div>

        {props.options.length === 0 && <p>Please add an option!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;
