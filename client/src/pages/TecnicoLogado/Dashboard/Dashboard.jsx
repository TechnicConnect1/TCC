import React from 'react'
import "./Dashboard.scss"
import AreaCards from '../../../components/dashboard/areaCards/AreaCards'
import AreaCharts from '../../../components/dashboard/areaCharts/AreaCharts'
import AreaTable from '../../../components/dashboard/areaTable/AreaTable'
import AreaTop from '../../../components/dashboard/areaTop/AreaTop'

export const Dashboard = () => {
  // Verifica se os dados do usuário estão presentes no localStorage
  const user_data = JSON.parse(localStorage.getItem("user_data"));
  // Verifica se os dados do técnico estão presentes no localStorage
  const tecnico_data = JSON.parse(localStorage.getItem("tecnico_data"));

  // Define os dados do usuário a serem usados com base na disponibilidade
  const userDataToUse = user_data || tecnico_data;

  return (
    <div className='content-area'>
      <AreaTop />
      {/* <h1 className='name-dashboard'>Olá,<span> {userDataToUse?.nomeTecnico || userDataToUse?.name}</span></h1> */}
      <h1>Olá, <span>Rafael Ferreira de Oliveira</span></h1>
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  )
}
