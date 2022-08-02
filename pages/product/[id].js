import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  return <div>Prueba página de producto {router.query.id}</div>;
};

export default ProductItem;
