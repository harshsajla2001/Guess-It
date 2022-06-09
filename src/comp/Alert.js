import React from 'react'

function Alert(props) {

    return (
        <div className="position-fixed" style={{ height: '50px', width: '100%' }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.typ} `} role="alert">
                    <strong>{props.alert.typ}</strong>:{props.alert.msg}

                </div>}
        </div>
    )
}
export default Alert