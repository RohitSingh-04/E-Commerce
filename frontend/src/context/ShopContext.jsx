import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
import axios from 'axios'

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEN_URL 
    const [search,setSearch]= useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({})
    const navigate = useNavigate()
    const [products,setProducts]=useState([])
    const [token,setToken] = useState('')


    const addToCart = async (itemId,size)=>{
        if(!size){
            toast.error('Select product size')
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('User not logged in');
            return;
        }

        let cartData = structuredClone(cartItems) 

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else{
                cartData[itemId][size]=1
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }
        setCartItems(cartData)

        if(token){
            try {
                const res = await axios.post(
                    backendUrl + '/api/cart/add',
                    {itemId, size },
                    { headers: { token } }
                  );
                  toast.success(res.data.message);
                  
            } catch (error) {
                toast.error(error.message)
                
            }
        }
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item]
                    }
                }catch(error){
            
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size , quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId][size]=quantity
        setCartItems(cartData)

        if(token){
            try {
                await axios.post(backendUrl+'/api/cart/update',{itemId, size , quantity},{headers:{token}})
            } catch (error) {
                toast.error(error.message)
                
            }
        }
    }

    const getCartAmmount =  ()=>{
        let totalAmmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmmount += itemInfo.price * cartItems[items][item]
                    }
                }
                catch(error){

                }
            }
        }
        return totalAmmount
    }

    const getProductsData = async ()=>{
        try {
            const response = await axios.get(backendUrl + '/api/product/list' )
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserCart = async (token)=>{
        try {
            const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    },[])
    const value = {
        products , currency , delivery_fee, search ,showSearch , setSearch , setShowSearch,cartItems,addToCart ,getCartCount,updateQuantity,setCartItems,getCartAmmount,navigate,backendUrl,setToken,token
    }
    return(
        <ShopContext.Provider value={value} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;