import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import OutsideClickHandler from "./utils/OutsideClickHandler";

const PieChartComponent = ({ onSliceClick }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const data = [
    { title: "Afiliados", value: 10.8, color: "#e87c11" },
    { title: "Suporte", value: 6.15, color: "#6ea763c6" },
    { title: "Vendas", value: 10.88, color: "#c8b15493" },
    { title: "Gente e Gestão", value: 8.77, color: "#ba0ebadd" },
    { title: "Tecnologia", value: 12, color: "#4682B4" },
    { title: "Marketing", value: 18.01, color: "#5082e4ca" },
    { title: "Financeiro", value: 19.69, color: "#c82b55" },
    { title: "Planejamento", value: 13.69, color: "#ff4400b4" },
  ];

  const handleClick = (event, index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }

    if (onSliceClick) {
      onSliceClick(event, index);
    }
  };

  const handleOutsideClick = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="department-list-box">
        <ul
          style={{
            listStyle: "none",
            width: "233px",
            paddingTop: "18%",
            paddingLeft: "10%",
          }}
        >
          {data.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                color:
                  selectedIndex === index || hovered === index
                    ? entry.color
                    : "#666", // Escurece as não selecionadas
                fontSize: "1.2rem",
                cursor: "pointer",
                fontWeight:
                  selectedIndex === index || hovered === index
                    ? "bold"
                    : "normal",
                transition: "all 0.9s ease",
              }}
              onMouseOver={() => setHovered(index)}
              onMouseOut={() => setHovered(null)}
              onClick={(event) => handleClick(event, index)}
            >
              <strong>{entry.title}:</strong> {entry.value}%
            </li>
          ))}
        </ul>
      </div>

      <div style={{ width: "400px" }}>
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
          <PieChart
            data={data.map((entry, index) => ({
              ...entry,
              color:
                (selectedIndex === null && hovered === null) ||
                selectedIndex === index ||
                hovered === index
                  ? entry.color
                  : "#666",
            }))}
            paddingAngle={0}
            viewBoxSize={[100, 100]}
            totalValue={100}
            animate={true}
            label={({ dataEntry }) => `${dataEntry.percentage.toFixed(2)}%`}
            labelStyle={{
              fontSize: "0.23rem",
              fontWeight: "bold",
              fill: "#fff",
              textAnchor: "middle",
              userSelect: "none",
              pointerEvents: "none",
            }}
            labelPosition={75}
            radius={42}
            lineWidth={45}
            segmentsStyle={(index) => ({
              transition: "all 0.3s ease",
              cursor: "pointer",
              filter: selectedIndex === index ? "brightness(1.3)" : "none", // Ilumina o item selecionado
            })}
            onMouseOver={(_, index) => setHovered(index)}
            onMouseOut={() => setHovered(null)}
            onClick={(event, index) => handleClick(event, index)} // Adiciona evento de clique nas fatias
          />
        </OutsideClickHandler>
      </div>
    </>
  );
};

export default PieChartComponent;
