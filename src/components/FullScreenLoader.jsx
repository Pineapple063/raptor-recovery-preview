import { useState, useEffect } from "react";

function FullScreenLoader({ loading }) {
    const [visible, setVisible] = useState(loading);

    useEffect(() => {
        if (!loading) {
            setTimeout(() => setVisible(false), 300); // Match CSS transition duration
        } else {
            setVisible(true);
        }
    }, [loading]);

    return visible ? (
        <div className={`loading-container-cover ${loading ? "fade-in" : "fade-out"}`}>
            <div className="loading-spinner-cover"></div>
        </div>
    ) : null;
}

export default FullScreenLoader;
