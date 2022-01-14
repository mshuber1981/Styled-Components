import ComplexTitle from "./ComplexTitle";
import Product from "./Product";

const products = [
  { id: 1, name: "chair", price: 30 },
  { id: 2, name: "bed", price: 150 },
  { id: 3, name: "couch", price: 550 },
];

export default function Products() {
  return (
    <>
      <ComplexTitle title={"Products"} />
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
}
