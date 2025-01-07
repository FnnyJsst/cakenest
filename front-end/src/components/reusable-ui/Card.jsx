import styled from "styled-components"
import { theme } from "../../theme"
import PrimaryButton from "./PrimaryButton"
import { FiX } from 'react-icons/fi';
import OrderContext from "../../context/OrderContext";
import { useContext } from "react";

export default function Card({ title, imageSource, leftDescription }) {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <CardStyled className="produit">
      {isModeAdmin && <FiX className="delete-button" />}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 320px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    color: white; 
    background-color: ${theme.colors.primary}; 
    border-radius: 50%; 
    padding: 5px; 
    font-size: 20px;
  }

  &:hover .delete-button {
    display: block;
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 20px;

    img {
      max-width: 200px;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P3};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Pacifico", sans-serif;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`
