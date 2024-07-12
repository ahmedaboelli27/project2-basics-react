
   
export const productValidation = (product: {title: string, description: string, price: string, imgURL: string}) => {
    const errors: {title: string, description: string, price: string, imgURL: string} = 
    {
        title: "",
        price: "",
        imgURL: "",
        description: "",
    }
    const validUrl = /(https?:\/\/)([^\s]+\.)([^\s]+)(?:\/|\?)(\w+|\.[^s]+){1,}(?:[=&]?\w+){0,}(?:#[\w-]+)?/i.test(product.imgURL);
    if (!product.title.trim() || product.title.length < 5 || product.title.length > 25)
        {errors.title = "The Title Must Be Between 5 And 25 Characters!!"}
    if (!product.description.trim() || product.description.length < 25 || product.description.length > 250)
        {errors.description = "The Description Must Be Between 25 And 250 Characters!!"}
    if (!product.price.trim() || product.price.length < 1 || product.price.length > 12)
        {errors.price = "The price Must Be Between 1 And 12 Characters!!"}
    if (!product.imgURL.trim() || !validUrl){errors.imgURL = "Vlid Image URL Is Required"}
    if (!product.price.trim() || isNaN(Number(product.price))){errors.price = "Vlid Price Is Required"}
   
    return errors
}