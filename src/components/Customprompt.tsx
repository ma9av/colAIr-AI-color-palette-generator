import { useState } from "react";

function CustomPrompt({ palette }: { palette: string[] }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleOpenPrompt = () => {
    setShowPrompt(true);
  };

  const handleSubmit = () => {
    const string = localStorage.getItem("palettes");
    console.log(string);
    
    const storage = (JSON.parse(string!));
    console.log(storage);
    
    
      if(storage[userInput] || userInput === "") {
        setShowPrompt(false);
        return
        }
      
        storage[userInput] = palette;
        
        localStorage.setItem("palettes",JSON.stringify(storage))
        setShowPrompt(false);

    setUserInput(""); 
  };

  const handleClose = () => {
    setShowPrompt(false);
    setUserInput(""); 
  };

  return (
    <div className="p-2" style={{ textAlign: "center", placeContent:"center"}}>
      <button
        onClick={handleOpenPrompt}
        style={{
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        >💾
      </button>

      {showPrompt && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              padding: "20px",
              borderRadius: "8px",
              color: "#fff",
              width: "300px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p style={{ marginBottom: "10px" }}>Enter name for palette:</p>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{
                width: "90%",
                padding: "10px",
                border: "1px solid #555",
                borderRadius: "4px",
                marginBottom: "10px",
                backgroundColor: "#444",
                color: "#fff",
              }}
            />
            <div>
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: "#FFD700",
                  color: "#000",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                Submit
              </button>
              <button
                onClick={handleClose}
                style={{
                  backgroundColor: "#555",
                  color: "#fff",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomPrompt;
