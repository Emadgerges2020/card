import React, {useState} from "react";
import Header from "./Home/Header";
import Maincart from "./Content/Maincart";



const App = ()=>{

    const [data, setData] = useState([
        { id: 0, name: "Chipsy", count: 1, price: 8 },
        { id: 1, name: "Pepsi", count: 1, price: 5 },
        { id: 2, name: "Molto", count: 1, price: 3 },
        { id: 3, name: "Kranchy", count: 1, price: 10 },
        { id: 4, name: "Cigarates", count: 1, price: 30 },
      ]);
    
      const [bg, setBg] = useState(true);
    
      const [products] = useState([
        { id: 0, name: "Chipsy", count: 1, price: 8 },
        { id: 1, name: "Pepsi", count: 1, price: 5 },
        { id: 2, name: "Molto", count: 1, price: 3 },
        { id: 3, name: "Kranchy", count: 1, price: 10 },
        { id: 4, name: "Cigarates", count: 1, price: 30 },
      ]);


      //Add Function
      const addProduct = (obj) =>{
        let check = data.some((additem)=>{
          return additem.id === obj.id;
        })
        if(check){
          increament(obj)
        }else {
          setData([...data, obj])
        }
      }


      // change Bg
      const changeBg = () =>{
        setBg(!bg)
        console.log(bg);
      }

      // Empty Function
      const empty = () =>{
        setData([]);
      }


      // Reset Function 
      const reset = () =>{
        let updateData = data.map((item)=>{
          item.count = 1;
          return item
        })
        setData(updateData)
      }

      
      // Increament Function
      const increament = (obj) =>{
         let result = data.map((item) => {
          if(item.id === obj.id){
            item.count++
          }
          return item;
        })
        // Update
        setData(result);
      }



      // Decreament Function
      const decreament = (obj) =>{
         let products2 = data.map((item) => {
          if(item.id === obj.id){
            if(item.count > 1){
              item.count--
            }
          }
          return item;
        })
        // Update
        setData(products2);
      }


      // Delete Function
      const delBtn = (obj)=> {
        // eslint-disable-next-line array-callback-return
        let products3 = data.filter((item) => {
          if(item.id !== obj.id){
            return item;
          }else{
            item.count = 1;
          }
        })
        setData(products3)
      }

  


      

    return (
        <div>
            <Header products={data.length} newproducts={products} addProduct={addProduct}/>
            <Maincart data={data}  increament={increament} decreament={decreament} delBtn={delBtn} empty={empty} reset={ reset}  changeBg={changeBg} bg={bg}/>
        </div>
    )
}

export default App