import React, {useState, Fragment} from 'react'
import { Link } from "react-router-dom"
import layoutWrapper from '../../containers/layout/layoutWrapper'
import QrReader from 'react-qr-scanner'
import {Button, Typography} from '@material-ui/core'


const ScannerPage = ({addToCart, removeFromCart}) => {

    const [openScanner, setOpenScanner] = useState(false)
    const [delay, setDelay] = useState(100)
    const [scannedData, setScannedData] = useState('No items added')
    const [scanError, setScanError] = useState(false)

    const previewStyle = {
        height: 240,
        width: `100%`,
    }

    const handleScan = (productId) => {
        setScannedData(productId)
        
        if(productId){
            addToCart(productId)
            setOpenScanner(false)
        }
    }
    
    const handleError = (err) => {
        setScanError(false)
    }

    return(
        
        <div>

            {!openScanner && <Button variant="contained" color="primary"onClick={() => setOpenScanner(true)}> Open Scanner </Button>}

            {openScanner && 
                <QrReader
                    delay={delay}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
            }

            {scannedData ?
                <p>Scanned Product ID: {scannedData}</p>
            :
                null
            }
        </div>
    )
    

}


export default ScannerPage