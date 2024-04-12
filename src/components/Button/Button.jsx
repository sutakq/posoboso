import './Button.css'

export default function Button({ children, backgroundColor, color }) {

    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color
    }

    return (
        <>
        
            <button style={buttonStyle} className="button">{children}</button>
        
        </>
    )
}