import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../css/ContactUs.css"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const ContactUs = () => {
    const MySwal = withReactContent(Swal)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [messageSending, setMessageSending] = useState(false)

    const showErrorMessage = (title, message) => {
        MySwal.fire({
            title: title,
            text: message,
            icon: "error",
            showConfirmButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: "error-confirm-button"
            }
        })
    }

    const showSuccessMessage = (message) => {
        MySwal.fire({
            title: "Success",
            text: message,
            icon: "success",
            showConfirmButton: true,
            buttonsStyling: false,
            customClass: {
                confirmButton: "success-confirm-button"
            }
        })
    }

    
    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        const inputs = document.querySelectorAll("input")
        inputs.forEach(input => input.value = "")
        const textarea = document.querySelector("textarea")
        textarea.value = ""
    }

    const sendMessage = async (e) => {
        e.preventDefault()

        const trimmedFirstName = firstName.trim()
        const trimmedLastName = lastName.trim()
        const trimmedEmail = email.trim()
        const trimmedPhoneNumber = phoneNumber.trim().replace(/\D/g, '');
        const trimmedMessage = message.trim()

        if (trimmedPhoneNumber === "" && trimmedEmail === "") {
            showErrorMessage("Phone Number or Email Required", "Please enter a valid phone number or email address")
            return
        }

        if (trimmedMessage === "") {
            showErrorMessage("Message Required", "Please enter a message")
            return;
        }

        if (trimmedEmail !== "") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!emailRegex.test(trimmedEmail)) {
                showErrorMessage("Invalid Email", "Please enter a valid email address")
                return;
            }
        }

        if (trimmedPhoneNumber !== "") {
            
            if (trimmedPhoneNumber.length < 7 || trimmedPhoneNumber.length > 20) {
                showErrorMessage("Invalid Phone Number", "Please enter a valid phone number")
                return;
            }
        }



        setMessageSending(true)
        try {
            const response = await fetch("http://localhost:8080/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: trimmedFirstName,
                    lastName: trimmedLastName,
                    email: trimmedEmail,
                    phoneNumber: trimmedPhoneNumber,
                    message: trimmedMessage
                })
            })

            if (!response.ok) {
                setMessageSending(false)
                throw new Error("Network response was not ok")

            }

            const data = await response.json()

            if (data.status === "success") {
                setMessageSending(false)
                showSuccessMessage(data.message)
                clearForm();

            } else {

                setMessageSending(false)
                showErrorMessage("Error", "An error occurred while sending the message. Please try again later.")
            }

        } catch (error) {

            setMessageSending(false)
            showErrorMessage("Error", "An error occurred while sending the message. Please try again later.")
        }
        
        
    }



    return (
        <>
            <Header />
            <div className="contact-page-grid">
            <div className="new_home_web">
                <div className="responsive-container-block big-container">
                    <div className="responsive-container-block textContainer">
                    <div className="topHead">
                        <p className="text-blk heading">Contact Us</p>
                        <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id">
                        </div>
                    </div>
                    <p className="text-blk subHeading">
                    Need help on the road? Get in touch with us. We're here 24/7 to get you moving again.
                    </p>
                    </div>
                    <div className="responsive-container-block container">
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b">
                        <form className="form-box">
                        <div className="container-block form-wrapper">
                            <div className="responsive-container-block">
                            <div className="left4">
                                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-2">
                                <input className="input" id="ijowk-2" name="FirstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                <input className="input" id="indfi-2" name="Last Name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                <input className="input" id="ipmgh-2" name="Email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                                <input className="input" id="imgis-2" name="PhoneNumber" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                            </div>
                            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-2">
                                <textarea className="textinput" id="i5vyy-2" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            </div>
                            {messageSending ? <div className="loading-spinner-cover"></div> :
                            <button className="send-message-button" onClick={sendMessage} id="w-c-s-bgc_p-1-dm-id">Send</button>
                            }
                            
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="pre-footer-triangle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="triangle-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                </svg>
            </div>
            <Footer />
        </>
    )
}



export default ContactUs