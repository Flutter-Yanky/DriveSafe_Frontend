import { QrScanner } from "react-qrcode-scanner";
import Navbar from "../components/Navbar";

const ScanQrCode = () => {

    const handleScan = (value) => {
        alert("Qr code Scanned and it will redirect you to the fine page of user.")
        window.location.href = value
        console.log({ value })
    }

    const handleError = (error) => {
        console.log({ error })
    }

    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl text-center font-medium text-gray-500 ">
                    Scan Qr code
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <QrScanner
                        onScan={handleScan}
                        onError={handleError}

                    /** Default props
                    onError = (error) => console.log({error}),
                    onScan = (value) => console.log({value}),
                    facingMode = 'environment', // environment|face
                    constraints = null, //device constraints
                    onLoad = (val :{mirrorVideo, streamLabel}) => null,
                    flipHorizontally = false, //flip or reflect the video output based on facing mode
                    style, //section styling can be added here
                    className, //classnames will be added to the section wrapper
                    delay = 800, //delay between each scan
                    resolution = 600, //canvas resolution
                    aspectRatio = '16:9',
                    showViewFinder = true,
                    viewFinder = { //any valid JS-CSS can be added here
                        border: '12px solid rgba(255,255,255,0.3)',
                        position: 'absolute',
                        borderRadius: '5px',
                        width: '250px',
                        height: '250px'
                    }
                    */
                    />
                </dd>
            </div>
        </div>
    )
}

export default ScanQrCode