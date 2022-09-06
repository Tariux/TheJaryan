import React from 'react'
import MainFunctions from '../Sources/Functions/Main/main-functions';

function RandomElements(props) {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    return (
        <div className='random-elements'>
            {


                Object.values(props.items).map((element, index) => {
                    if (element.content && element.type) {

                        const randoms = []

                        let repeat_count = 1


                        if (element.count) {
                            repeat_count = element.count
                        }

                        if (element.type === "text") {
                            for (let index = 0; index < repeat_count; index++) {
                                let randomTop = MainFunctions.getRandomNumber(0, winHeight);
                                let randomLeft = MainFunctions.getRandomNumber(0, winWidth);
        
                                randoms.push(
                                    <span key={randomTop} style={{ left: randomLeft, top: randomTop }} className={element.class}>{element.content}</span>
                                )
                            }

                        } else if(element.type === "image") {
                            let image_width = (element.width) ? element.width : ("50px")
                            let image_height = (element.height) ? element.height : ("50px")

                            for (let index = 0; index < repeat_count; index++) {
                                let randomTop = MainFunctions.getRandomNumber(0, winHeight);
                                let randomLeft = MainFunctions.getRandomNumber(0, winWidth);
        
                                randoms.push(
                                    <span key={randomTop}><img style={{ left: randomLeft, top: randomTop, width: image_width, height: image_height }} src={element.content} className={element.class} /></span>
                                )
                            }

                        }


                        return <>{randoms}</>


                    }
                })

            }
        </div>
    )
}

export default RandomElements