import { useState } from 'react'
 const useInput = (initialValue)=>{
    const [value,setValue]=useState(initialValue)
    const handleChange= (e)=>{
        setValue(e.target.value)
    }

    return {value, onChange:handleChange}
}

 const useSubmit = (initialValue)=>{
    const [value,setValue]=useState(initialValue)

    const handleChange= (e)=>{
        setValue(e.target.value)
    }

    return {value, onChange:handleChange}
}

 const useAgree = (initialValue)=>{
    const [value,setValue]=useState(initialValue)

    const handleChange= (e)=>{
        setValue(e.target.value)
    }

    return {value, onChange:handleChange}
}

export {useInput, useSubmit, useAgree}