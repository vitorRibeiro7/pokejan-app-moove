import { MainView, StyledImage, ImageWrapper, InfoWrapper, StyledH1, StyledText } from "./style";

function ShowCard({ data }) {

    console.log("teste", data)

    return (
        <MainView>
            <ImageWrapper>
                <StyledImage src={`${data?.sprites?.other.home.front_default}`} alt={`foto ilustrativa`}></StyledImage>
            </ImageWrapper>
            <InfoWrapper>
                <StyledH1>{`${data?.name?.charAt(0).toUpperCase() + data?.name?.slice(1)}`}</StyledH1>
                {
                    data?.stats?.map((dado, key) => <StyledText key={key}>{`${dado.stat.name.charAt(0).toUpperCase() + dado.stat.name.slice(1)}: ${dado.base_stat}`}</StyledText>)
                }
                
            </InfoWrapper>
        </MainView>
    )
}

ShowCard.defaultProps = {
    data: []
}

export default ShowCard;