import { useLocation } from "react-router-dom";
import { getProductById } from "../helpers"
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ProductPage = () => {

  const { products } = useSelector( state => state.ecommerce );

  const location = useLocation();

  const extractIdFromSlug = (slug) => {
    const parts = slug.split('-');
    const id = parts[0];
    return id;
  };

  useEffect(() => {
    const pathname = location.pathname;
    const slug = pathname.substring(pathname.lastIndexOf('/') + 1);
    const productId = extractIdFromSlug(slug);
    getProductById(products , productId);
  }, [location]);

  return (
    <>
      
    </>
  )
}
