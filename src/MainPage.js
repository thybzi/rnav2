import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "./Header";

export function MainPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(searchParams.get('page') || 1);
    const navigate = useNavigate();

    useEffect(() => {
        const perPage = 10;
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
            .then((res) => (res.json()))
            .then(data => setItems(data.meals.slice(startIndex, endIndex)));
    }, [page]);

    return  <>
        <Header/>
        <h1>Всем привет</h1>
        <p>Это самая главная страница в мире</p>
        {items.map((itemData) => (
            <div key={itemData.idMeal}>{itemData.strMeal} ({itemData.strCategory})</div>
        ))}
        <div style={{display: 'flex', gap: 10}}>
            {[1, 2, 3, 4, 5].map((pageNum, i) => (
                <button onClick={() => {
                    setSearchParams({page: pageNum});
                    navigate('/?page=' + pageNum);
                    setPage(pageNum);
                }} key={i}>{pageNum}</button>
            ))}
        </div>
    </>
}
