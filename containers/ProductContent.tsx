import React from "react";

const products = [
  {
    name: "ZX 9000 A-ZX Series sneakers",
    image:
      "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_18.jpg",
    listColor: ["red", "blue"],
    price: 100000,
  },
  {
    name: "ZX 9000 A-ZX Series sneakers",
    image:
      "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_18.jpg",
    listColor: ["red", "blue"],
    price: 100000,
  },
  {
    name: "ZX 9000 A-ZX Series sneakers",
    image:
      "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_18.jpg",
    listColor: ["red", "blue"],
    price: 100000,
  },
  {
    name: "ZX 9000 A-ZX Series sneakers",
    image:
      "https://api-prod-minimal-v4.vercel.app/assets/images/products/product_18.jpg",
    listColor: ["red", "blue"],
    price: 100000,
  },
];

const ProductContent = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <div className="bg-product rounded-lg" key={idx}>
          <div className="p-2">
            <img
              className="rounded-lg"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="py-6 px-2">
            <h1 className="text-base font-semibold">{product.name}</h1>
            <div className="flex items-center justify-between mt-5 px-3">
              <div className="flex items-center">
                {product.listColor.map((color, idx) => (
                  <div
                    className="h-3 w-3 rounded-full"
                    key={idx}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-base font-semibold">
                {product.price.toLocaleString("vi")} đ
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductContent;
