import { render, screen } from "@testing-library/react"
import Comment from "../Comment"


describe('Comment', () => {
  
    test('Should render comment with message', ()=>{
        //Given
        const testMessage = {message: 'Hello'}

        //When
        render(<Comment comment={testMessage}/>)

        //screen.debug()
        const messageElement = screen.getByText(testMessage.message)

        //Then
        expect(messageElement).toHaveTextContent("Hello")
    })
})
