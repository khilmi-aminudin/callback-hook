import React, {useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age,setAge] = useState(25)
    const [poin,setPoin] = useState(50000)

    const incrementAge = useCallback(
        () => {
            setAge(age + 1 )
        },[age]
    )
    const incrementPoin = useCallback(
        () => {
            setPoin(poin + 1000)
        },
        [poin]
    )
    

    return (
        <div>
            <Title/>
            <Count text='Age' count={age} />
            <Button click = {incrementAge} >Increment Age</Button>
            <Count text='Poin' count={poin} />
            <button click = {incrementPoin} >Increment Poin</button>
        </div>
    )
}

export default ParentComponent
