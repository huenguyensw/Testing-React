import {fireEvent, render,screen} from "@testing-library/react"
import CommentInput from "../../CommentInput/CommentInput"
import CommentArea from "../CommentArea"

describe("test comment Area",()=>{

    test("should display an inputed comment in the list",()=>{

        //Given
        const inputMessage = "testmessage"



        //When
        render(<CommentArea/>)
        // to make sure 'inputMessage' does not exist on viewer mode.
        const messageCheck = screen.queryByText(/testmessage/i)
        expect(messageCheck).not.toBeInTheDocument()

        const inputField = screen.getByPlaceholderText(/Add Comment/i)
        fireEvent.click(inputField)
        fireEvent.change(inputField, {target: {value: inputMessage}})


        const button = screen.getByRole("button", {name: "Add"})
        fireEvent.click(button)
        

        //Then
        const comment = screen.getByText(inputMessage)
        expect(comment).toBeInTheDocument()
    })
})