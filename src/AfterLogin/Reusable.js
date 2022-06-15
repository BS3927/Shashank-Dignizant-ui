import React from 'react'

export const Radio = (props) => {
    const { obj, fnChange } = props;
    const { lbl, type, value, errorMsg, isShowError, options, values, name } = obj
    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
            </div>
            <div className='col-sm-3 text-start'>
                {
                    options.map((val, i) => {
                        return <><input checked={values[i] == value} onChange={fnChange} className='ms-3' key={i} type={type} name={name} value={values[i]} />{val}</>
                    })
                }
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}

export const CheckBox = (props) => {
    const { obj, fnChange } = props
    const { lbl, type, value, errorMsg, isShowError, options, names, name } = obj
    let checkedObj = {}
    if (value) {
        let values = value.split(',')
        values.forEach((val) => {
            checkedObj[val] = true
        })

    }
    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
            </div>

            <div className='col-sm-3 text-start'>
                {
                    options.map((val, i) => {
                        return <><input checked={checkedObj[names[i]]} onChange={fnChange} className='ms-3' name={name} key={i} type={type} id={names[i]} />{val}</>
                    })
                }
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}

export const Select = (props) => {
    const { obj, fnChange } = props;
    const { lbl, value, errorMsg, isShowError, options, values, name } = obj
    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
            </div>
            <div className='col-sm-3 text-start'>
                <select onChange={fnChange} className='form-control' name={name}>
                    <option>Please Select</option>
                    {
                        options.map((val, i) => {
                            return <option selected={value == values[i]} value={values[i]} key={i}>{val}</option>
                        })
                    }
                </select>
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}

export const TextBox=(props)=>{
    const {obj,fnChange} =props
   const {lbl,type,name,value,errorMsg,isShowError,isDisabled}=obj
   return <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
                <b>{lbl}:</b>
        </div>
        <div className='col-sm-3'>
            <input disabled={isDisabled} onChange={fnChange} className='form-control' value={value} type={type} name={name}  />
        </div>
        <div className='col-sm-4 text-start'>
            {isShowError && <b className='text-danger'>{errorMsg}</b>}
        </div>
   </div>
}

export const Items = (props) => {
    
    return (
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <>
          <div className="card p-0 overflow-hidden h-100 shadow">
            
          </div>
        </>
      </div>
    );
}