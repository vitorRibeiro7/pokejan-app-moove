import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { MainView, StyledImage, ImageWrapper, InfoWrapper } from "./style";
import DefImg from "../../assets/img/teste.png";


function ShowCard({ data }) {

    return (
        <MainView>
            <ImageWrapper>
                <StyledImage src={`${data.lenght == 0 ? DefImg : data?.sprites?.other.home.front_default}`} alt={`foto ilustrativa`}></StyledImage>
            </ImageWrapper>
            <InfoWrapper>
                <h1 >{`${data?.name}`}</h1>
            </InfoWrapper>
        </MainView >
    )
}

ShowCard.defaultProps = {
    data: []
}

export default ShowCard;