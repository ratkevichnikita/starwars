import React, {FC} from 'react';
//styles
import cn from "classnames";
//types
import {ISearchPeople} from "../../types/search";

interface ICards {
    data: ISearchPeople[]
}

const Cards:FC<ICards> = ({data}) => {
    return (
        <ul className={cn('cards')}>
            { data.map(card => {
                return (
                    <li key={card.name} className={cn('cards-item')}>
                       <div>Имя: {card.name}</div>
                       <div>Пол: {card.gender}</div>
                       <div>Рост: {card.height}</div>
                       <div>Вес: {card.mass}</div>
                       <div>Цвет глаз: {card.eyeColor}</div>
                       <div>Цвет волос: {card.hairColor}</div>
                       <div>Создан: {card.created}</div>
                       <div>Исправлен: {card.edited}</div>
                        <div>
                            Список фильмов:
                            { card.films?.length > 0 ? card.films.map(item => <div key={item}>{item}</div>) : <div>'нет фильмов'</div> }
                        </div>
                        <div>
                            Список видов:
                            { card.species?.length > 0 ? card.species.map(item => <div key={item}>{item}</div>) : <div>'нет видов'</div> }
                        </div>
                        <div>
                            Список:
                            { card.starships?.length > 0 ? card.starships.map(item => <div key={item}>{item}</div>) : <div>'нет кораблей'</div> }
                        </div>
                        <div>
                            Список:
                            { card.vehicles?.length > 0 ? card.vehicles.map(item => <div key={item}>{item}</div>) : <div>'нет транспорта'</div> }
                        </div>
                       <div>Сcылка: {card.url}</div>
                    </li>
                )
            })
            }
        </ul>
    );
};

export default Cards;