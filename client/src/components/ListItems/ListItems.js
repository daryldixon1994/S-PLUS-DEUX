import React from "react";
import CardItem from "../cardItem/CardItem";
import "./ListItems.css";

function ListItems() {
    const posts = [
        {
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fstock-photography-portrait-normal-man-smiling-over-grey-background-young-face-high-detailed-image30820412&psig=AOvVaw2Q2elxxh8UjmjfQoB0nyMm&ust=1643821561611000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj47dX-3vUCFQAAAAAdAAAAABAD",
            firstName: "John",
            lastName: "Paul",
            phone: 4458215661,
            type: "Private",
            purpose: "Rent",
            Tunis: "Ariana",
            delegation: "La Marsa",
            adresseOne: "Avenue La belle marine",
            adresseTwo: "",
            surface: 400,
            rooms: 3,
            price: 880,
            photos: [
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.archdaily.com%2F931830%2Fnew-house-sturgess-architecture&psig=AOvVaw0n5OlE_TdJz04su71Up9bZ&ust=1643821229039000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiIrbb93vUCFQAAAAAdAAAAABAD",
            ],
            isReported: false,
        },
    ];
    return (
        <div className="list-container">
            <h1>Hello</h1>
            <div className="list-items-container">
                <CardItem />
            </div>
        </div>
    );
}

export default ListItems;
