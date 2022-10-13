import { useState } from "react";
export default function DataBindingComponent(){
    const [products, setProduct] = useState(["TV","Mobail","Shoe"]);
    return(
        <div className="container">
            <ol>
                {
                    products.map(product=>
                        <li key={product}>{product}</li>
                    )
                }
            </ol>
        </div>
    )
}