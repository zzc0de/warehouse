import React from "react";
import "../widgets/widgets.css";
import CanvasJSReact from "../../lib/canvas/canvasjs.react"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({devices}) => {
    const nameArray = [];
    let newArray = []
    let count = []

    const getDevicesCount = () => {
        devices.map((item) => {
            nameArray.push(item.type);
        });
        nameArray.map((sum) => {
            count[sum] = (count[sum] || 0) + 1
        });
        Object.keys(count).map(function(x) {
            newArray.push({y: count[x], label: x})
        })
    }
    getDevicesCount()
 
    const options = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            fontSize: 12,
            title: "Категории",
            reversed: true,
        },
        axisY: {
            fontSize: 12,
            title: "Количество",
            includeZero: true,
        },
        data: [
            {
                type: "bar",
                indexLabelLineThickness: 1,
                dataPoints:[...newArray]
            }
        ]
    }

    return (
        <div className="widget-item">
          <div className="wrapper-title">
          <div className="icon-title"><i className="bi bi-card-checklist"></i></div>
          <div className="widget-item__title">Статиcтика по оборудованию</div>
          </div>
            <CanvasJSChart options = {options} />
        </div>
    )
}

export default Chart;


