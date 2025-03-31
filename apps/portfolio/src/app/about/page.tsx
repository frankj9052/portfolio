import { AboutSectionLayout } from "../../components/home/AboutSectionLayout"

const AboutPage = () => {
    return (
            <div className="flex items-center justify-center">
              <div className="container mx-auto">
                <div className="w-[90%] md:w-[80%] mx-auto ">
                  <div
                    className='h-vertical-center'
                  >
                    <AboutSectionLayout/>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default AboutPage;