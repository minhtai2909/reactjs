import { productApi } from "api/productAPI";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let result = await productApi.get(productId);               
                setProduct({ ...result });
            } catch (err) {
                console.log("Failed to fetch product", err);
            }
            setLoading(false);
        })()
    }, [productId])

    return {
        product, loading
    }
}