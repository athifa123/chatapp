const Inputbox = () => {
    return (
        <div className="initiatechat" style={{
            "display": "flex",
            "flex-direction": "row",
            "width": "100%",
            "flex-wrap": "nowrap",
            "align-content": "center",
            "align-items": "stretch",
            "justify-content": " center",
            "position": "fixed", "bottom": "0"
        }}>
            <input style={{
                'width': '100%', "height"
                    : "20%",
                'padding': '10px',
                'border': '1px solid purple',
                'border-radius': '10px',
                'background': "pink"
            }} />
            <button style={{
                "background ": "green", 'padding': '10px',
                'border': '1px solid red',
                'border-radius': '10px',
            }}> Send </button>

        </div>


    )
}

export default Inputbox;