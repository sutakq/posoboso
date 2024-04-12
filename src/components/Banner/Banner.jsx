import './Banner.css'
import banner from '../../../public/banner/banner.jpg'
import Button from '../Button/Button'

export default function Banner() {
    return (
        <>
        
            <div className="banner">


                <img src={banner} alt="banner" className='banner-photo' />

                <div className="banner-content">


                    <h1 className="title">Онлайн-магазин</h1>
                    <p className="description">*лучший по продажам среди конкурентов</p>

                    <Button backgroundColor="#f3f3f3" color="#333">Каталог</Button>

                </div>

            </div>
        
        </>
    )
}