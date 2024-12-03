
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/queries/productsQueries";
import { useState } from "react";

const Products = () => {
    const [page, setpage] = useState(1);
    const { data, error, isLoading, isPlaceholderData } = useProducts(page);

    if (isLoading)
        return (
            <>
                <h1>Fetching Products ....</h1>
            </>
        );
    if (error)
        return (
            <>
                <h1>{error.message} Fetching Products </h1>
            </>
        );

    return (
        <>
            {/* <button
                onClick={refetch}
                className="bg-black inline p-2 text-white rounded-md m-3"
            >
                Fetch Post
            </button> */}
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-10 h-auto">
                {data &&
                    data.map((product) => (
                        <div key={product.id} className="p-2 rounded-xl border bg-gray-400">
                            <img
                                src={product.image}
                                width={"100%"}
                                style={{ objectFit: "contain", height: "200px" }}
                                alt={product.title}
                            />
                            <h2>{product.title}</h2>
                            <span>Rs. {product.price}</span>
                            <p>{product.category}</p>
                            <p>{product.description.slice(0, 100)}</p>
                            <Link
                                className="bg-orange-400 p-2 inline-block mt-2 rounded-md"
                                to={`${product.id}`}
                            >
                                View Product
                            </Link>
                        </div>
                    ))}
            </div>
            <div className="flex gap-5 items-center justify-center">
                <button className="border p-2 rounded-md bg-gray-300" onClick={() => setpage((prev) => Math.max(prev - 1, 1))} >Prev</button>
                <span>Current Page : {page}</span>
                <button className="border p-2 rounded-md bg-gray-300" disabled={isPlaceholderData} onClick={() => setpage((prev) => (prev + 1))} >Next</button>
            </div>
        </>
    );
};

export default Products;
