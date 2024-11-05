import mongoose from "mongoose";

const Connection = () => {
    const MONGODB_URI = 'mongodb+srv://sky:75410@whatsapp-clone.2gaa2.mongodb.net/ToDoListDB?retryWrites=true&w=majority&appName=ToDoListApp';

    mongoose.connect(MONGODB_URI, {});

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });

    // Fix: Pass the 'error' parameter to log the error message correctly
    mongoose.connection.on('error', (error) => {
        console.log("Error:", error.message);
    });
};

export default Connection;
