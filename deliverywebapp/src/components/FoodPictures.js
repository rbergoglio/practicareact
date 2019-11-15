import React from "react";
import FoodPicture from "./FoodPicture";

//todo: mejorar lo de foodpicture, algo tipo un for que vaya sacando datos de una lista de tuplas?
class FoodPictures extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <FoodPicture
            src="https://cdn.colombia.com/sdi/2018/10/16/empanadas-de-pollo-678550.jpg"
            foodName="Empanadas"
          />
          <FoodPicture
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mqGcr3Vn9Ed6Pb52n2bKMDm_TaGUVD6le0INKrWRcQq4RcNT"
            foodName="Pizzas"
          />
          <FoodPicture
            src="https://d1uz88p17r663j.cloudfront.net/original/84e720e8bc62d59c69924ba55da2b810_ensalada_de_pollo_1.jpg"
            foodName="Ensaladas"
          />
          <FoodPicture
            src="https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg"
            foodName="Hamburgesas"
          />
        </div>
      </div>
    );
  }
}

export default FoodPictures;
