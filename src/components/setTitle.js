import React from 'react';
import { connect } from 'react-redux';
import { setTitle, changeValue } from "../redux/storeTitle"


const SetTitleA = (props) => {

    let clickFN = () => {
        props.setTitle()
    }

    let fnChange = (e) => {
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
    let titlePage = state.TitlePage
    return {
        title: titlePage.title,
        value: titlePage.value,
    }
}

export default connect(mapStateToProps, { setTitle, changeValue })(SetTitleA);











    // let clickFN = () => {
    //   console.log("Hello World!!!")
    //   let add = document.createElement("h1")
    //   add.textContent = "Hello World!!!"
    //   document.body.append(add)
    // }



