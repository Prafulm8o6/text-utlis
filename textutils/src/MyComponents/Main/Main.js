import React from 'react'
import TextForm from '../TextForm/TextForm'

function Main(props) {
    return (
        <div className={`container-fluid bg-${props.bgmode}` }>
            <TextForm title="TextUtils" bgmode={props.bgmode} />
        </div>
    )
}

export default Main