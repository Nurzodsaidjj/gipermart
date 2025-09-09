import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Barcha productlarni bir marta olish
  useEffect(() => {
    axios.get("https://market-backend-zeta.vercel.app/all").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  // Search input o‘zgarganda filterlash
  useEffect(() => {
    if (search.trim().length === 0) {
      setResults([]);
      return;
    }
    const filtered = allProducts.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  }, [search, allProducts]);

  // Search natijasidan biror product tanlansa
  const handleSelect = (item) => {
    navigate(`/${item.category}/${item.id}`);
    setSearch("");
    setResults([]);
  };

  return (
    <header>
      {/* ...headerning boshqa qismlari... */}
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      {results.length > 0 && (
        <ul
          style={{
            position: "absolute",
            background: "#fff",
            border: "1px solid #eee",
            width: "250px",
            zIndex: 1000,
            listStyle: "none",
            margin: 0,
            padding: "8px",
          }}
        >
          {results.slice(0, 8).map((item) => (
            <li
              key={item.id}
              style={{ cursor: "pointer", padding: "4px 0" }}
              onClick={() => handleSelect(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      {/* ...headerning boshqa qismlari... */}
    </header>
  );
}