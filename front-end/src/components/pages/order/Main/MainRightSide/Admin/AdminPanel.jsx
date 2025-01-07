import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import { getTabSelected, tabsConfig } from "./tabsConfig"
import AdminAddForm from "./AdminAddForm"
import AdminUpdateForm from "./AdminUpdateForm"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)

  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>
      {tabSelected.index === "add" && <AdminAddForm />}
      {tabSelected.index === "edit" && <AdminUpdateForm />}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

  p {
    padding: 0 20px;
  }
`
