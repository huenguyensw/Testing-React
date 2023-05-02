import CommentList from "../CommentList"
import {render, screen} from "@testing-library/react"


describe("CommentList", () => {
    test('should display correct amount of comments', () => {

        //Given
        const testCommentList = [
            { message: "testmessage 1" },
            { message: "testmessage 2" }]

        //When
        render(<CommentList comments = {testCommentList}/>)
        const messageElements = screen.getAllByText(/testmessage /i)

        //Then
        expect(messageElements.length).toBe(2);


    })
})

