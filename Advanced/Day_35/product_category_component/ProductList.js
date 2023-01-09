import '../styles/products.css'

function ProductList(props){

    const {category} = props;

    const products = [
        {name: "Lay's Chips", category: "Snacks", price: 20, img: "https://www.jiomart.com/images/product/600x600/491696351/lay-s-india-s-magic-masala-potato-chips-73-g-product-images-o491696351-p590122120-0-202211141844.jpg"},
        {name: "Kurkure", category: "Snacks", price: 20, img: "https://www.bigbasket.com/media/uploads/p/xxl/294267_13-kurkure-namkeen-chilli-chatka.jpg"},
        {name: "Waffy", category: "Snacks", price: 70, img: "https://www.bigbasket.com/media/uploads/p/l/40065768_9-dukes-waffy-choco-roll.jpg"},
        {name: "Banana chips", category: "Snacks", price: 40, img: "https://www.jiomart.com/images/product/original/490655155/chheda-s-yellow-banana-chips-170-g-product-images-o490655155-p590086933-0-202203170329.jpg"},
        {name: "Thums Up", category: "Cold Drinks", price: 30, img:"https://m.media-amazon.com/images/I/71h7T4jsgzL._SL1500_.jpg"},
        {name: "Ocean", category: "Cold Drinks", price: 35 , img:"https://www.jiomart.com/images/product/600x600/491264454/ocean-fruit-drink-pink-guava-flavoured-water-500-ml-product-images-o491264454-p590086990-1-202203151134.jpg"},
        {name: "Appy", category: "Cold Drinks", price: 10, img:"https://5.imimg.com/data5/LU/GQ/TR/SELLER-12622749/mango-juice-500x500.jpg"},
    ];

    let filteredArray = [];
    if(category==="Snacks"){
        filteredArray = products.filter( (item)=>item.category==="Snacks");
    }
    else if(category==="Cold Drinks"){
        filteredArray = products.filter((item)=>item.category === "Cold Drinks");
    }
    else if(category===""){
        filteredArray = products;
    }

    return(
        <div id="products">
            {filteredArray.map(item=>
                <div className="item">
                    <img src={item.img} alt="item"/>
                    <p>{item.name}</p>
                    <p className='price'>Rs {item.price}</p>
                </div>    
            )}
        </div>
    )
}

export default ProductList;