import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./components/Login";

test("username, password and button should be present",()=>{
    render(<Login/>);

    const userInputElement = screen.getByPlaceholderText(/username/i)
    expect(userInputElement).toBeInTheDocument()
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement).toBeInTheDocument()
    const buttonInputElement = screen.getByRole("button")    
    expect(buttonInputElement).toBeInTheDocument()


})

test("username and password should be empty at the beginning",()=>{
    render(<Login/>);

    const userInputElement = screen.getByPlaceholderText(/username/i)
    expect(userInputElement.value).toBe("")
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement.value).toBe("")
   


})


test("Should be able to type the username and password",()=>{
    render(<Login/>);

    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const testUsernameValue = 'sanmil'
    const testPasswordValue = 'sanmil@8561'
    fireEvent.change(userInputElement, {target:{value: testUsernameValue}});
    expect(userInputElement.value).toBe(testUsernameValue)
    
    fireEvent.change(passwordInputElement, {target:{value: testPasswordValue}});
    expect(passwordInputElement.value).toBe(testPasswordValue)
   


})


test("Username and Password Input fields should be empty after clicking on the Login Btn",()=>{
    render(<Login/>);

    const userInputElement = screen.getByPlaceholderText(/username/i)
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    const buttonInputElement = screen.getByRole("button")    
    expect(buttonInputElement).toBeInTheDocument()
    const testUsernameValue = 'sanmil'
    const testPasswordValue = 'sanmil@8561'
    fireEvent.change(userInputElement, {target:{value: testUsernameValue}});
    expect(userInputElement.value).toBe(testUsernameValue)
    
    fireEvent.change(passwordInputElement, {target:{value: testPasswordValue}});
    expect(passwordInputElement.value).toBe(testPasswordValue)

    fireEvent.click(buttonInputElement)
    expect(userInputElement.value).toBe('')
    expect(passwordInputElement.value).toBe('')

})
