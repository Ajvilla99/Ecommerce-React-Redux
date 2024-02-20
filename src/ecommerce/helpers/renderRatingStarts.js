import { RxStar, RxStarFilled } from "react-icons/rx";

export const renderRatingStarts = (star = 0) => {
    const fullStars = Math.floor(star);
    const stars = []
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<RxStarFilled key={`${i} star`}/>)
    }
    const prueba = 5 - fullStars
    for (let i = 0; i < prueba; i++) {
      stars.push(<RxStar key={`${i} star`}/>)
    }

    return stars
}
