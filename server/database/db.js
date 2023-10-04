
import mongoose from "mongoose";

 const Conection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mybloging.ufv0bvc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log("Database Connection Succssefully");
    } catch (error){
        console.log(`Failed Database Connection Please Check Connection.`, error);
    }
}
export default Conection