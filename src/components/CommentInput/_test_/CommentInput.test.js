import CommentInput from "../CommentInput"
import {fireEvent, render, screen} from "@testing-library/react"

describe("CommentInput",()=>{

    test('should allow two ways binding input',()=>{
        //Given
        const testInput = "teststring"
        
        
        //When
        render(<CommentInput />)
        const inputField = screen.getByPlaceholderText(/Add Comment/i)
        fireEvent.click(inputField)
        fireEvent.change(inputField,{target: {value: testInput}})

        //Then
        expect(inputField).toHaveValue(testInput)
    })
})