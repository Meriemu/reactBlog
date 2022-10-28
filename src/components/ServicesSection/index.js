import React from 'react'
import { ServicesContainer, ServicesH1, ServcesWrapper, ServicesCard, ServiceIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> Our Services </ServicesH1>
        <ServcesWrapper>
            <ServicesCard>
                <ServiceIcon src={Icon1} />
                <ServicesH2> Reduce expenses 1</ServicesH2>
                <ServicesP>Quis deserunt esse reprehenderit nisi excepteur dolor aliquip deserunt ad incididunt dolore magna.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={Icon2} />
                <ServicesH2> Reduce expenses 2</ServicesH2>
                <ServicesP>Quis deserunt esse reprehenderit nisi excepteur dolor aliquip deserunt ad incididunt dolore magna.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServiceIcon src={Icon3} />
                <ServicesH2> Reduce expenses 3</ServicesH2>
                <ServicesP>Quis deserunt esse reprehenderit nisi excepteur dolor aliquip deserunt ad incididunt dolore magna.</ServicesP>
            </ServicesCard>
        </ServcesWrapper>        
    </ServicesContainer>
  )
}

export default Services