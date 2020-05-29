export default function LineNumber(props) {
    function determineImage(lineNumber) {
        let data = {"image":'', "css":''}
        if (lineNumber < 70) {
            data.image = 'tram'
            data.css = 'tram'
        }
        else if (lineNumber >= 70 && lineNumber < 100) {
            data.image = 'tram'
            data.css = 'tram'
        }
        else if (lineNumber >= 100 && lineNumber < 200) {
            data.image = 'bus'
            data.css = 'bus'
        }
        else if (lineNumber >= 200 && lineNumber < 300) {
            data.image = 'bus'
            data.css = 'bus-regional'
        }
        else if (lineNumber >= 300 && lineNumber < 400) {
            data.image = 'bus'
            data.css = 'bus-regional'
        }
        else if (lineNumber >= 400 && lineNumber < 500) {
            data.image = 'bus-black'
            data.css = 'bus-extra'
        }
        else if (lineNumber >= 500 && lineNumber < 600) {
            data.image = 'bus'
            data.css = 'bus'
        }
        else if (lineNumber >= 600 && lineNumber < 700) {
            data.image = 'bus'
            data.css = 'night'
        }
        else if (lineNumber >= 700 && lineNumber < 800) {
            data.image = 'bus'
            data.css = 'bus'
        }
        else if (lineNumber >= 800 && lineNumber < 900) {
            data.image = 'bus'
            data.css = 'bus'
        }
        else if (lineNumber >= 900 && lineNumber < 1000) {
            data.image = 'bus'
            data.css = 'night-regional'
        }
        else {
            data.image = 'undefined'
            data.css = 'undefined'
        }
        return data;
    }
    const imageData = determineImage(props.data.info.lineNumber)
    return (
        <div className='line-number'>
            <div className={`line-number-img-wrapper ${imageData.css}`}>
                <img src={`/icons/bus-and-tram/${imageData.image}.svg`}/>
            </div>
        <h2>{props.data.info.lineNumber}</h2>
        </div>
    )
}