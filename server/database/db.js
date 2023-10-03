
import mongoose from "mongoose";

 const Conection = async () => {
    const URL = `mongodb+srv://vickymasulkar:Zxcvbnm@123@reactbloging.zodtpby.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log("Database Connection Succssefully");
    } catch (error){
        console.log(`Failed Database Connection Please Check Connection.`, error);
        console.log(`Failed Database Connection Please Check Connection.`, error);
    }
}
export default Conection