import React from 'react';
import { connect } from 'react-redux';
import { setTitle, changeValue } from "../redux/storeTest"


const SetTitleA = (props) => {

    let clickFN = () => {
        // console.log("Hello World!!!")
        props.setTitle()
    }
    // let clickFN = () => {
    //   console.log("Hello World!!!")
    //   let add = document.createElement("h1")
    //   add.textContent = "Hello World!!!"
    //   document.body.append(add)
    // }

    let fnChange = (e) => {
        console.log("e : ", e.target.value)
        props.changeValue(e.target.value)
    }

    return (
        <div>
            <div className='back' >
                {props.title}
                <p>  </p>
                <button onClick={clickFN} >Click</button>
                <p></p>

                <input onChange={fnChange} value={props.value} />
                <p></p>
                <p></p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        value: state.value
    }
}

export default connect(mapStateToProps, { setTitle, changeValue })(SetTitleA);














