import { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import { useMenu } from "../../../../../context/MenuContext";
import apiAxios from "../../../../../../libs/axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const { setMenu: setMenuContext } = useMenu();
  const [currentPage, setCurrentPage] = useState(1);
  const cupcakesPerPage = 8;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await apiAxios.get('/api/cupcakes');
        setMenu(response.data.data);
        setMenuContext(response.data.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération du menu :", error);
      }
    };

    fetchMenu();
  }, [setMenuContext]);

  const indexOfLastCupcake = currentPage * cupcakesPerPage;
  const indexOfFirstCupcake = indexOfLastCupcake - cupcakesPerPage;
  const currentCupcakes = menu.slice(indexOfFirstCupcake, indexOfLastCupcake);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <MenuStyled className="menu">
      <div className="cupcake-grid">
        {currentCupcakes.map(({ id, title, imageSource, price }) => (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        ))}
      </div>
      <Pagination>
        {Array.from({ length: Math.ceil(menu.length / cupcakesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </Pagination>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: ${theme.borderRadius.extraRound};
  
  .cupcake-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 22px;
    padding: 15px;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;

  button {
    margin: 0 5px;
    padding: 5px;
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.dark};
    }
  }
`;