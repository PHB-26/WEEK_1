require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

app.get("/gemini-test", async (req, res) => {

    try {

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        const result = await model.generateContent(
            "Explain recursion in one sentence."
        );

        const response =
            result.response.text();

        res.json({
            response
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Gemini connection failed"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    app.post("/generate", async (req, res) => {

        try {
    
            const { feature, text } = req.body;
    
            let prompt = "";
    
            switch (feature) {
    
                case "explain":
                    prompt =
                        `Explain the following concept in simple terms:\n${text}`;
                    break;
    
                case "summarize":
                    prompt =
                        `Summarize the following text into 5 bullet points:\n${text}`;
                    break;
    
                case "quiz":
                    prompt =
                        `Generate 5 quiz questions based on:\n${text}`;
                    break;
    
                default:
                    prompt = text;
            }
    
            const model =
                genAI.getGenerativeModel({
                    model: "gemini-2.5-flash"
                });
    
            const result =
                await model.generateContent(prompt);
    
            const response =
                result.response.text();
    
            res.json({
                response
            });
    
        } catch (error) {
    
            console.error(error);
    
            res.status(500).json({
                error: "Failed to generate response"
            });
        }
    });
});